package controllers

import (
	"net/http"
	"strconv"

	"github.com/FLAME-God/lms/dto"
	"github.com/FLAME-God/lms/service"
	"github.com/gin-gonic/gin"
)

func CreateRating(c *gin.Context) {
	var body *dto.RatingRequest
	if err := c.ShouldBindBodyWithJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	userID, exists := c.Get("user_id")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User not authenticated"})
		return
	}
	typedUserID, ok := userID.(uint)
	if !ok {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "User ID type assertion failed"})
		return
	}

	rating, err := service.CreateRating(body, typedUserID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "Rated successfully",
		"success": true,
		"rating":  rating,
	})
}

func GetRatingByCourseID(c *gin.Context) {
	courseID, exists := c.Params.Get("course_id")
	if !exists {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Course ID not provided"})
		return
	}
	typedCourseID, err := strconv.Atoi(courseID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Course ID"})
		return
	}

	ratings, err := service.GetRatingByCourseID(uint(typedCourseID))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "Ratings fetched successfully",
		"success": true,
		"ratings": ratings,
	})
}
