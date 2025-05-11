package models

import (
	"github.com/lib/pq"
	"gorm.io/gorm"
)

type CourseModel struct {
	gorm.Model
	CourseName  string         `json:"courseName" gorm:"not null"`
	Description string         `json:"description" gorm:"not null"`
	Category    string         `json:"category" gorm:"not null"`
	Syllabus    pq.StringArray `json:"syllabus" gorm:"type:text[]"`
	Duration    string         `json:"duration" gorm:"not null"`
	Price       int            `json:"price" gorm:"not null"`
	TeacherID   uint           `json:"teacherId" gorm:"not null;index"` // Faster lookup
	Teacher     TeacherModel   `json:"teacher" gorm:"foreignKey:TeacherID;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
