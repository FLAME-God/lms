package routes

import (
	"github.com/FLAME-God/lms/controllers"
	"github.com/gin-gonic/gin"
)

func AuthRoutes(rg *gin.RouterGroup) {
	student := rg.Group("/user")
	{
		student.POST("/signin", controllers.StudentLogin)
	}
}
