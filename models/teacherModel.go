package models

import "gorm.io/gorm"

type TeacherModel struct {
	gorm.Model
	User           User          `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	UserID         uint          `json:"userId" gorm:"not null"`
	Avatar         string        `json:"avatar"`
	AvatarPublicID string        `json:"avatarPublicId"`
	Expertise      string        `json:"expertise" gorm:"not null"`
	Experience     int           `json:"experience"`
	Qualification  string        `json:"qualification"`
	TotalStudent   int           `json:"totalStudent" gorm:"default:0"`
	AccountNumber  string        `json:"accountNumber"`
	IfscCode       string        `json:"ifscCode"`
	BankName       string        `json:"bankName"`
	BranchName     string        `json:"branchName"`
	About          string        `json:"about"`
	Courses        []CourseModel `json:"courses" gorm:"foreignKey:TeacherID"`
}
