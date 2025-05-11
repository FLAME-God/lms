package dto

type CourseRequest struct {
	CourseName  string   `json:"courseName" binding:"required"`
	Category    string   `json:"catagory" binding:"required"`
	Description string   `json:"description" bindng:"required"`
	Syllabus    []string `json:"syllabus" binding:"required"`
	Duration    string   `json:"duration" binding:"required"`
	Price       int      `json:"price" binding:"required"`
}
