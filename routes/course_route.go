package routes

import (
	"github.com/FLAME-God/lms/config"
	"github.com/FLAME-God/lms/controllers"
	"github.com/FLAME-God/lms/middleware"
	"github.com/gin-gonic/gin"
)

func CoursesRoutes(rg *gin.RouterGroup) {
	courses := rg.Group("/courses")
	{
		courses.POST("/create", middleware.CheckAuth, middleware.Authorize(config.ManageCourse), controllers.CreateCourse)
		courses.GET("/get-course/:id", middleware.CheckAuth, controllers.GetCourse)
		courses.GET("/get-all-courses", middleware.CheckAuth, controllers.GetAllCourses)
	}
}
