package main

import (
	"github.com/FLAME-God/lms/config"
	"github.com/FLAME-God/lms/routes"
)

func init() {
	config.LoadEnvVar()
	config.ConnectToDB()
	config.MigrateDatabase()
}

func main() {
	r := routes.SetupRoutes()

	r.Run()

}
