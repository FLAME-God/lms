package routes

import (
	"github.com/FLAME-God/lms/config"
	"github.com/FLAME-God/lms/controllers"
	"github.com/FLAME-God/lms/middleware"
	"github.com/gin-gonic/gin"
)

func CoursesRoutes(rg *gin.RouterGroup) {
	allowedTypes := map[string]string{
		".jpg":  "image",
		".jpeg": "image",
		".png":  "image",
		".gif":  "image",
		".mp4":  "video",
		".mov":  "video",
		".avi":  "video",
	}
	courses := rg.Group("/courses")
	{
		courses.POST("/create", middleware.CheckAuth, middleware.Authorize(config.ManageCourse), middleware.UploadToCloudinaryMiddleware("image", allowedTypes), controllers.CreateCourse)
		courses.GET("/get-course/:id", middleware.CheckAuth, controllers.GetCourse)
		courses.GET("/get-all-courses", middleware.CheckAuth, controllers.GetAllCourses)
		courses.PATCH("/update-course/:id", middleware.CheckAuth, middleware.Authorize(config.ManageCourse), controllers.UpdateCourse)
		courses.PUT("/update-course/:id", middleware.CheckAuth, middleware.Authorize(config.ManageCourse), controllers.UpdateCourse)
		courses.DELETE("/delete-course/:id", middleware.CheckAuth, middleware.Authorize(config.ManageCourse), controllers.DeleteCourse)
		courses.GET("/get-course-by-teacher_id/:id", middleware.CheckAuth, controllers.GetCoursesByTeacherID)
		courses.POST("/course/:id/purches", middleware.CheckAuth, middleware.Authorize(config.EnroleCourse), controllers.PurchaseCourse)
	}
}
