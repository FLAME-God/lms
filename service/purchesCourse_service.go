package service

import (
	"errors"

	"github.com/FLAME-God/lms/config"
	"github.com/FLAME-God/lms/models"
	"gorm.io/gorm"
)

func PurchaseCourse(userID uint, courseID uint) (models.PurchasedCourse, error) {
	var existingPurchasedCourse models.PurchasedCourse

	// Step 1: Check if the course is already purchased
	err := config.DB.Where("user_id = ? AND course_id = ?", userID, courseID).First(&existingPurchasedCourse).Error
	if err == nil {
		// Course already purchased, return the existing record
		return existingPurchasedCourse, errors.New("course already purchased")
	} else if err.Error() != "record not found" && err != gorm.ErrRecordNotFound {
		// Some other DB error
		return models.PurchasedCourse{}, err
	}

	// Step 2: Create the purchase
	purchasedCourse := models.PurchasedCourse{
		UserID:   userID,
		CourseID: courseID,
	}

	if err := config.DB.Create(&purchasedCourse).Error; err != nil {
		return purchasedCourse, err
	}

	// Step 3: Preload User and Course
	if err := config.DB.Preload("User").Preload("Course").First(&purchasedCourse, purchasedCourse.ID).Error; err != nil {
		return purchasedCourse, err
	}

	return purchasedCourse, nil
}
