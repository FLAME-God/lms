package routes

import "github.com/gin-gonic/gin"

func SetupRoutes() *gin.Engine {
	r := gin.Default()

	api := r.Group("/api/v1")

	StudentRoutes(api)
	TeacherRoutes(api)
	AuthRoutes(api)
	CoursesRoutes(api)

	return r
}
