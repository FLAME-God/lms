package models

import (
	"github.com/lib/pq"
	"gorm.io/gorm"
)

type CourseModel struct {
	gorm.Model
	CourseName    string         `json:"courseName" gorm:"not null"`
	Description   string         `json:"description" gorm:"not null"`
	Image         string         `json:"image"`
	ImagePublicID string         `json:"imagePublicId"`
	Category      string         `json:"category"`
	Syllabus      pq.StringArray `json:"syllabus" gorm:"type:text[]"`
	Duration      string         `json:"duration" gorm:"not null"`
	Price         int            `json:"price" gorm:"not null"`
	Ratings       []RatingModel  `json:"ratings" gorm:"foreignKey:CourseID"`
	RatingCount   int            `json:"ratingCount" gorm:"default:0"`
	AvgRating     float32        `json:"avgRating" gorm:"default:0"`
	TeacherID     uint           `json:"teacherId" gorm:"not null;index"` // Faster lookup
	Teacher       TeacherModel   `json:"teacher" gorm:"foreignKey:TeacherID;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
