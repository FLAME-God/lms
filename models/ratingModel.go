package models

import "gorm.io/gorm"

type RatingModel struct {
	gorm.Model
	CourseID uint        `json:"courseId" gorm:"not null;index"` // Faster lookup
	Course   CourseModel `json:"course" gorm:"foreignKey:CourseID;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	UserID   uint        `json:"userId" gorm:"not null;index"` // Faster lookup
	User     User        `json:"user" gorm:"foreignKey:UserID;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	Rating   int         `json:"rating" gorm:"not null"`
	Review   string      `json:"review" gorm:"not null"`
}
