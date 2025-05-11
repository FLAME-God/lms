package service

import (
	"fmt"

	"github.com/FLAME-God/lms/config"
	"github.com/FLAME-God/lms/dto"
	"github.com/FLAME-God/lms/models"
	"github.com/FLAME-God/lms/utils"
	"golang.org/x/crypto/bcrypt"
)

func UserSignup(req dto.UserSignupRequest) (*models.User, error) {
	var existingUser models.User
	if err := config.DB.Where("email = ?", req.Email).First((&existingUser)).Error; err == nil {
		return nil, fmt.Errorf("user with email %s already exists", req.Email)
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(req.Password), 10)
	if err != nil {
		return nil, fmt.Errorf("failed to hash password:%v", err)
	}
	req.Password = string(hash)

	user := models.User{
		FullName: req.FullName,
		Email:    req.Email,
		Password: req.Password,
		Phone:    req.Phone,
		Role:     models.UserRole(req.Role),
	}
	if err := config.DB.Create(&user).Error; err != nil {
		return nil, fmt.Errorf("failed to create user: %v", err)
	}
	return &user, nil
}

func UserLogin(req dto.UserLoginRequest) (*models.User, string, error) {
	var user models.User
	if err := config.DB.Where("email = ?", req.Email).First(&user).Error; err != nil {
		return nil, "", fmt.Errorf("user with email %s not found", req.Email)
	}
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password)); err != nil {
		return nil, "", fmt.Errorf("invalid email or password: %v", err)
	}

	tokenString, err := utils.GenerateToken(user.ID, string(user.Role))
	if err != nil {
		return nil, "", fmt.Errorf("failed to sign token: %v", err)
	}

	return &user, tokenString, nil
}
