package dto

type RatingRequest struct {
	Rating   int    `form:"rating" binding:"required"`
	Review   string `form:"review" binding:"required"`
	CourseID uint   `form:"course_id" binding:"required"`
}
