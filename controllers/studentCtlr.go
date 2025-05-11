package controllers

import (
	"net/http"

	"github.com/FLAME-God/lms/dto"
	"github.com/FLAME-God/lms/service"
	"github.com/gin-gonic/gin"
)

func StudentSignup(c *gin.Context) {
	var body dto.UserSignupRequest
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	if body.Role != "STUDENT" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Role must be STUDENT"})
		return
	}
	user, err := service.UserSignup(body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"success": false,
			"message": "Failed to create user",
			"error":   err.Error(),
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"message": "User created successfully",
		"user":    user,
	})
}

func StudentLogin(c *gin.Context) {
	var body dto.UserLoginRequest
	if err := c.ShouldBindBodyWithJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	user, token, err := service.UserLogin(body)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"success": false,
			"message": "Failed to login user",
			"error":   err.Error(),
		})
		return
	}

	c.SetSameSite(http.SameSiteNoneMode)
	c.SetCookie("Authorization", token, 3600*24*30, "", "", false, true)

	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"message": "User logged in successfully",
		"user":    user,
		"token":   token,
	})

}
