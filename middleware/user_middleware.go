package middleware

import (
	"net/http"
	"strings"

	"github.com/FLAME-God/lms/utils"
	"github.com/gin-gonic/gin"
)

func CheckAuth(c *gin.Context) {
	// Get Authorization header
	authHeader := c.GetHeader("Authorization")
	if authHeader == "" {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Authorization header not found"})
		return
	}

	// Expected format: "Bearer <token>"
	tokenParts := strings.SplitN(authHeader, " ", 2)
	if len(tokenParts) != 2 || tokenParts[0] != "Bearer" {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Invalid Authorization header format"})
		return
	}

	// Parse and validate token
	claims, err := utils.ValidateToken(tokenParts[1])
	if err != nil {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Invalid or expired token"})
		return
	}

	// Attach user info to context
	c.Set("user_id", claims.UserID)
	c.Set("role", claims.Role)

	c.Next()
}
