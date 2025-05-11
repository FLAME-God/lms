package service

import (
	"github.com/FLAME-God/lms/config"
	"github.com/FLAME-God/lms/dto"
	"github.com/FLAME-God/lms/models"
)

func CreateCourse(req dto.CourseRequest, UserID uint) (*models.CourseModel, error) {
	// check if the user is a teacher
	var teacher models.TeacherModel
	if err := config.DB.Where("user_id = ?", UserID).First(&teacher).Error; err != nil {
		return nil, err
	}
	// create new course
	course := &models.CourseModel{
		CourseName:  req.CourseName,
		Category:    req.Category,
		Description: req.Description,
		Duration:    req.Duration,
		Syllabus:    req.Syllabus,
		Price:       req.Price,
		TeacherID:   teacher.ID,
	}
	// save the course model to the database
	if err := config.DB.Create(course).Error; err != nil {
		return nil, err
	}
	// preload the associated User before returning
	if err := config.DB.Preload("Teacher.User").First(course, course.ID).Error; err != nil {
		return nil, err
	}
	// return the course model
	return course, nil
}

func GetCourseByID(id uint) (*models.CourseModel, error) {
	// find the course by ID
	var course models.CourseModel
	if err := config.DB.Preload("Teacher.User").First(&course, id).Error; err != nil {
		return nil, err
	}
	// return the course model
	return &course, nil
}

func GetAllCourses() ([]models.CourseModel, error) {
	// find all courses
	var courses []models.CourseModel
	if err := config.DB.Preload("Teacher.User").Find(&courses).Error; err != nil {
		return nil, err
	}
	// return the course models
	return courses, nil
}

func UpdateCourse(id uint, updateData map[string]interface{}) (*models.CourseModel, error) {
	// find the course by ID
	var course models.CourseModel
	if err := config.DB.First(&course, id).Error; err != nil {
		return nil, err
	}
	// update the course model with the new data
	if err := config.DB.Model(&course).Updates(updateData).Error; err != nil {
		return nil, err
	}
	// preload the associated User before returning
	if err := config.DB.Preload("Teacher.User").First(&course, id).Error; err != nil {
		return nil, err
	}
	// return the updated course model
	return &course, nil
}

func DeleteCourse(id uint) error {
	// find the course by ID
	var course models.CourseModel
	if err := config.DB.First(&course, id).Error; err != nil {
		return err
	}
	// delete the course model from the database
	if err := config.DB.Delete(&course).Error; err != nil {
		return err
	}
	return nil
}

func GetCoursesByTeacherID(teacherID uint) ([]models.CourseModel, error) {
	// find all courses by teacher ID
	var courses []models.CourseModel
	if err := config.DB.Where("teacher_id = ?", teacherID).Preload("Teacher.User").Find(&courses).Error; err != nil {
		return nil, err
	}
	// return the course models
	return courses, nil
}
