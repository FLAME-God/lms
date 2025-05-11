package controllers

import (
	"net/http"

	"strconv"

	"github.com/FLAME-God/lms/dto"
	"github.com/FLAME-God/lms/service"
	"github.com/gin-gonic/gin"
)

func CreateCourse(c *gin.Context) {
	var body dto.CourseRequest

	if err := c.ShouldBindBodyWithJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "invalid request",
			"success": false,
			"error":   err.Error(),
		})
		return
	}
	// Create the course
	course, err := service.CreateCourse(body, c.GetUint("user_id"))
	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
			"message": "failed to create course",
			"success": false,
			"error":   err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "course created successfully",
		"success": true,
		"course":  course,
	})
}

func GetCourse(c *gin.Context) {
	courseID := c.Param("id")
	id, err := strconv.ParseUint(courseID, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "invalid course ID",
			"success": false,
			"error":   err.Error(),
		})
		return
	}
	course, err := service.GetCourseByID(uint(id))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "failed to get course",
			"success": false,
			"error":   err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "course retrieved successfully",
		"success": true,
		"course":  course,
	})
}

func GetAllCourses(c *gin.Context) {
	courses, err := service.GetAllCourses()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "failed to get courses",
			"success": false,
			"error":   err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "courses retrieved successfully",
		"success": true,
		"courses": courses,
	})
}
