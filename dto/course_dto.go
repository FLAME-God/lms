package dto

type CourseRequest struct {
	CourseName  string   `form:"courseName" binding:"required"`
	Category    string   `form:"catagory" binding:"required"`
	Description string   `form:"description" bindng:"required"`
	Syllabus    []string `form:"syllabus" binding:"required"`
	Duration    string   `form:"duration" binding:"required"`
	Price       int      `form:"price" binding:"required"`
}
