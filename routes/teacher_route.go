package routes

import (
	"github.com/FLAME-God/lms/controllers"
	"github.com/gin-gonic/gin"
)

func TeacherRoutes(rg *gin.RouterGroup) {
	teacher := rg.Group("/teacher")
	{
		teacher.POST("/signup", controllers.TeacherSignup)
	}
}
