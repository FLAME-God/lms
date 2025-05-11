package routes

import (
	"github.com/FLAME-God/lms/controllers"
	"github.com/gin-gonic/gin"
)

func StudentRoutes(rg *gin.RouterGroup) {
	student := rg.Group("/student")
	{
		student.POST("/signup", controllers.StudentSignup)
	}
}
