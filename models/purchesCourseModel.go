package models

import (
	"gorm.io/gorm"
)

type PurchasedCourse struct {
	gorm.Model
	UserID   uint `json:"userID" gorm:"not null;index"`
	CourseID uint `json:"courseID" gorm:"not null;index"`

	User   User        `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	Course CourseModel `json:"course" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}
