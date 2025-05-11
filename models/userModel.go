package models

import (
	"gorm.io/gorm"
)

type UserRole string

const (
	Admin     UserRole = "ADMIN"
	Student   UserRole = "STUDENT"
	Teacher   UserRole = "TEACHER"
	Institute UserRole = "INSTITUTE"
)

type User struct {
	gorm.Model
	FullName string   `json:"fullName" gorm:"not null"`
	Email    string   `json:"email" gorm:"unique;not null"`
	Password string   `json:"-" gorm:"not null"`
	Phone    int64    `json:"phone" gorm:"not null"`
	Role     UserRole `json:"role" gorm:"not null"`
}
