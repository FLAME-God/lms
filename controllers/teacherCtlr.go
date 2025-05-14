package controllers

import (
	"net/http"

	"github.com/FLAME-God/lms/dto"
	"github.com/FLAME-God/lms/service"
	"github.com/gin-gonic/gin"
)

func TeacherSignup(c *gin.Context) {
	var body dto.TeacherSignupRequest
	if err := c.ShouldBind(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	avatarUrl, exists := c.Get("url")
	if !exists {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get avatar URL"})
		return
	}
	avatarPublicID, exists := c.Get("public_id")
	if !exists {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get avatar public ID"})
		return
	}

	if body.Role != "TEACHER" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Role must be TEACHER"})
		return
	}
	user, err := service.UserSignup(dto.UserSignupRequest{
		FullName: body.FullName,
		Email:    body.Email,
		Password: body.Password,
		Phone:    body.Phone,
		Role:     body.Role,
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"success": false,
			"message": "Failed to create user",
			"error":   err.Error(),
		})
		return
	}

	teacher := &dto.TeacherSignupRequest{
		Expertise:     body.Expertise,
		Experience:    body.Experience,
		Qualification: body.Qualification,
		AccountNumber: body.AccountNumber,
		BankName:      body.BankName,
		IfscCode:      body.IfscCode,
		BranchName:    body.BranchName,
	}

	createdTeacher, err := service.CreateTeacher(*teacher, user.ID, avatarUrl.(string), avatarPublicID.(string))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"success": false,
			"message": "Failed to create teacher",
			"error":   err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"message": "User created successfully",
		"teacher": createdTeacher,
	})
}
