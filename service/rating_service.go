package service

import (
	"github.com/FLAME-God/lms/config"
	"github.com/FLAME-God/lms/dto"
	"github.com/FLAME-God/lms/models"
)

func CreateRating(req *dto.RatingRequest, userID uint) (*models.RatingModel, error) {
	rating := &models.RatingModel{
		Rating:   req.Rating,
		Review:   req.Review,
		CourseID: req.CourseID,
		UserID:   userID,
	}
	// Save the rating to the database
	if err := config.DB.Create(rating).Error; err != nil {
		return nil, err
	}

	// Update the course's average rating
	var course models.CourseModel
	if err := config.DB.First(&course, req.CourseID).Error; err != nil {
		return nil, err
	}
	var ratings []models.RatingModel
	if err := config.DB.Where("course_id = ?", req.CourseID).Find(&ratings).Error; err != nil {
		return nil, err
	}
	var totalRating int
	for _, r := range ratings {
		totalRating += r.Rating
	}
	averageRating := float64(totalRating) / float64(len(ratings))
	course.AvgRating = float32(averageRating)
	if err := config.DB.Save(&course).Error; err != nil {
		return nil, err
	}
	// Update the course's total rating
	course.AvgRating = float32(len(ratings))
	if err := config.DB.Save(&course).Error; err != nil {
		return nil, err
	}
	// Preload the user and course details
	if err := config.DB.Preload("User").Preload("Course").First(&rating, rating.ID).Error; err != nil {
		return rating, err
	}
	// Return the created rating
	return rating, nil
}

func GetRatingByCourseID(courseID uint) ([]models.RatingModel, error) {
	var ratings []models.RatingModel
	// Fetch all ratings for the given course ID
	if err := config.DB.Where("course_id = ?", courseID).Preload("User").Find(&ratings).Error; err != nil {
		return nil, err
	}
	// Return the list of ratings
	return ratings, nil
}
