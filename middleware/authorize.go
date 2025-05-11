package middleware

import (
	"github.com/FLAME-God/lms/config"
	"github.com/FLAME-God/lms/models"
	"github.com/gin-gonic/gin"
)

func Authorize(permision config.Permision) gin.HandlerFunc {
	return func(c *gin.Context) {
		roleVal, exists := c.Get("role")
		if !exists {
			c.AbortWithStatusJSON(401, gin.H{"error": "Unauthorized"})
			return
		}
		role := models.UserRole(roleVal.(string))

		if !config.HasPermission(role, permision) {
			c.AbortWithStatusJSON(403, gin.H{"error": "Forbidden"})
			return
		}
		c.Next()
	}
}
