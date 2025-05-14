package routes

import (
	"github.com/FLAME-God/lms/controllers"
	"github.com/FLAME-God/lms/middleware"
	"github.com/gin-gonic/gin"
)

func TeacherRoutes(rg *gin.RouterGroup) {
	allowedTypes := map[string]string{
		".jpg":  "image",
		".jpeg": "image",
		".png":  "image",
		".gif":  "image",
		".mp4":  "video",
		".mov":  "video",
		".avi":  "video",
	}
	teacher := rg.Group("/teacher")
	{
		teacher.POST("/signup", middleware.UploadToCloudinaryMiddleware("avatar", allowedTypes), controllers.TeacherSignup)
	}
}
