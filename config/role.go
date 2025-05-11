package config

import (
	"slices"

	"github.com/FLAME-God/lms/models"
)

type Permision string

const (
	ManageUser   Permision = "MANAGE_USER"
	ManageCourse Permision = "MANAGE_COURSE"
	ViewCourses  Permision = "VIEW_COURSES"
	EnroleCourse Permision = "ENROLE_COURSE"
)

var RolePermissions = map[models.UserRole][]Permision{
	models.Admin:   {ManageUser, ManageCourse, ViewCourses},
	models.Student: {ViewCourses, EnroleCourse},
	models.Teacher: {ManageCourse, ViewCourses},
}

func HasPermission(role models.UserRole, permision Permision) bool {
	permissions, ok := RolePermissions[role]
	if !ok {
		return false
	}

	return slices.Contains(permissions, permision)
}
