package config

import "github.com/FLAME-God/lms/models"

func MigrateDatabase() {
	err := DB.AutoMigrate(
		&models.User{},
		&models.TeacherModel{},
		&models.CourseModel{},
		&models.RatingModel{},
		&models.PurchasedCourse{},
	)
	if err != nil {
		panic("Failed to migrate database: " + err.Error())
	}
}
