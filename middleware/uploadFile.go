package middleware

import (
	"fmt"
	"net/http"
	"path/filepath"
	"strings"
	"time"

	"github.com/FLAME-God/lms/config"
	"github.com/cloudinary/cloudinary-go/v2/api/uploader"
	"github.com/gin-gonic/gin"
)

func UploadToCloudinaryMiddleware(folder string, allwoedTypes map[string]string) gin.HandlerFunc {
	return func(c *gin.Context) {
		file, err := c.FormFile("file")
		if err != nil {
			c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
				"error": "File is required",
			})
			return
		}

		openedFile, err := file.Open()
		if err != nil {
			c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to open file",
			})
			return
		}
		defer openedFile.Close()
		// Check if the file type is allowed
		ext := strings.ToLower(filepath.Ext(file.Filename))

		resourceType, ok := allwoedTypes[ext]
		if !ok {
			c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
				"error": "File type is not allowed",
			})
			return
		}

		// Init clodinary
		cld, err := config.InitCloudinary()
		if err != nil {
			c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to initialize cloudinary",
			})
			return
		}
		filename := strings.TrimSuffix(file.Filename, ext)
		timestamp := time.Now().Unix()
		publicID := fmt.Sprintf("%s_%d", filename, timestamp)
		params := uploader.UploadParams{
			Folder:       folder,
			PublicID:     publicID,
			ResourceType: resourceType, // image or video
			Overwrite:    &[]bool{true}[0],
		}
		if resourceType == "image" {
			params.Transformation = "w_500,h_500,c_fill"
		}
		// Upload the file to Cloudinary
		uploadResult, err := cld.Upload.Upload(c, openedFile, params)
		if err != nil {
			c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to upload file to cloudinary",
			})
			return
		}
		// Check if the upload was successful
		if uploadResult.SecureURL == "" {
			c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to upload file to cloudinary",
			})
			return
		}
		// Check if the public ID is empty
		if uploadResult.PublicID == "" {
			c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to upload file to cloudinary",
			})
			return
		}
		// Set the URL in the context
		c.Set("url", uploadResult.SecureURL)
		c.Set("public_id", uploadResult.PublicID)
		c.Next()
	}
}
