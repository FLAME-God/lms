package config

import (
	"log"
	"os"

	"github.com/cloudinary/cloudinary-go/v2"
)

// InitCloudinary initializes and returns a Cloudinary instance
func InitCloudinary() (*cloudinary.Cloudinary, error) {
	// You can load from ENV variables (recommended)
	cloudName := os.Getenv("CLOUDINARY_CLOUD_NAME")
	apiKey := os.Getenv("CLOUDINARY_API_KEY")
	apiSecret := os.Getenv("CLOUDINARY_API_SECRET")

	// Ensure all environment variables are present
	if cloudName == "" || apiKey == "" || apiSecret == "" {
		log.Println("Missing Cloudinary environment variables")
		return nil, ErrMissingCloudinaryEnv
	}

	// Format CLOUDINARY_URL (this is what the SDK expects)
	cloudinaryURL := "cloudinary://" + apiKey + ":" + apiSecret + "@" + cloudName

	// Initialize Cloudinary
	cld, err := cloudinary.NewFromURL(cloudinaryURL)
	if err != nil {
		log.Println("Failed to initialize Cloudinary:", err)
		return nil, err
	}

	return cld, nil
}

// Custom error to be more descriptive
var ErrMissingCloudinaryEnv = &CloudinaryConfigError{"CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, or CLOUDINARY_API_SECRET is missing"}

type CloudinaryConfigError struct {
	Message string
}

func (e *CloudinaryConfigError) Error() string {
	return e.Message
}
