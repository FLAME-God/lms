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

	if err := c.ShouldBind(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "invalid request",
			"success": false,
			"error":   err.Error(),
		})
		return
	}
	imageUrl, exists := c.Get("url")
	if !exists {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "failed to get image URL",
			"success": false,
		})
		return
	}
	imagePublicID, exists := c.Get("public_id")
	if !exists {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "failed to get image public ID",
			"success": false,
		})
		return
	}
	// Create the course
	course, err := service.CreateCourse(body, c.GetUint("user_id"), imageUrl.(string), imagePublicID.(string))
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

func UpdateCourse(c *gin.Context) {
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
	var body map[string]interface{}
	if err := c.ShouldBindBodyWithJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "invalid request",
			"success": false,
			"error":   err.Error(),
		})
		return
	}
	course, err := service.UpdateCourse(uint(id), body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "failed to update course",
			"success": false,
			"error":   err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "course updated successfully",
		"success": true,
		"course":  course,
	})
}

func DeleteCourse(c *gin.Context) {
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
	err = service.DeleteCourse(uint(id))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "failed to delete course",
			"success": false,
			"error":   err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "course deleted successfully",
		"success": true,
	})
}

func GetCoursesByTeacherID(c *gin.Context) {
	teacherID := c.Param("id")
	id, err := strconv.ParseUint(teacherID, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "invalid teacher ID",
			"success": false,
			"error":   err.Error(),
		})
		return
	}
	courses, err := service.GetCoursesByTeacherID(uint(id))
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

func PurchaseCourse(c *gin.Context) {
	courseID := c.Param("id")
	id, err := strconv.ParseInt(courseID, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "invalid course ID",
			"success": false,
			"error":   err.Error(),
		})
		return
	}
	purchasedCourse, err := service.PurchaseCourse(c.GetUint("user_id"), uint(id))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "failed to purchase course",
			"success": false,
			"error":   err.Error(),
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "course purchased successfully",
		"success": true,
		"course":  purchasedCourse,
	})
}
