package service

import (
	"github.com/FLAME-God/lms/config"
	"github.com/FLAME-God/lms/dto"
	"github.com/FLAME-God/lms/models"
)

func CreateTeacher(req dto.TeacherSignupRequest, UserID uint, avatarUrl string, avatarPublicID string) (*models.TeacherModel, error) {
	// create a new teacher model
	teacher := &models.TeacherModel{
		Expertise:      req.Expertise,
		Experience:     req.Experience,
		UserID:         UserID,
		Qualification:  req.Qualification,
		AccountNumber:  req.AccountNumber,
		BankName:       req.BankName,
		IfscCode:       req.IfscCode,
		BranchName:     req.BranchName,
		Avatar:         avatarUrl,
		AvatarPublicID: avatarPublicID,
		About:          req.About,
	}

	// save the teacher model to the database
	if err := config.DB.Create(teacher).Error; err != nil {
		return nil, err
	}

	// preload the associated User before returning
	if err := config.DB.Preload("User").First(teacher, teacher.ID).Error; err != nil {
		return nil, err
	}

	return teacher, nil
}
