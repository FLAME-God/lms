package models

import "gorm.io/gorm"

type TeacherModel struct {
	gorm.Model
	User          User          `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	UserID        uint          `json:"userId" gorm:"not null"`
	Avatar        string        `json:"avatar"`
	Expertise     string        `json:"expertise" gorm:"not null"`
	Experience    int           `json:"experience"`
	Qualification string        `json:"qualification"`
	AccountNumber string        `json:"accountNumber"`
	IfscCode      string        `json:"ifscCode"`
	BankName      string        `json:"bankName"`
	BranchName    string        `json:"branchName"`
	Courses       []CourseModel `json:"courses" gorm:"foreignKey:TeacherID"`
}
