package main

import (
	"net/http"
	"strconv"
	"text/template"
	"fmt"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.Static("/public", "public")

	e.GET("/", home)
	e.GET("/contact", contact)
	e.GET("/myProject", myProject)
	e.GET("/testimonial", testimonial)
	e.GET("/detailProject/:id", detailProject)
	e.POST("/", addedProject)

	e.Logger.Fatal(e.Start("localhost:8080"))
}

func home(c echo.Context) error {
	tmpl, err := template.ParseFiles("view/index.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"massage": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func contact(c echo.Context) error {
	tmpl, err := template.ParseFiles("view/contact.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"massage": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func myProject(c echo.Context) error {
	tmpl, err := template.ParseFiles("view/myProject.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"massage": err.Error()})
	}
	return tmpl.Execute(c.Response(), nil)
}

func addedProject(c echo.Context) error {
	title := c.FormValue("projectName")
	description := c.FormValue("input-description")
	startDate := c.FormValue("input-start-date")
	endDate := c.FormValue("input-end-date")

	fmt.Println("Title :" + title)
	fmt.Println("Description :" + description)
	fmt.Println("Start Date :" + startDate)
	fmt.Println("End Date :" + endDate)

	return c.Redirect(http.StatusMovedPermanently, "/")
}

func testimonial(c echo.Context) error {
	tmpl, err := template.ParseFiles("view/testimonial.html")
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"massage": err.Error()})
	}
	return tmpl.Execute(c.Response(), nil)
}

func detailProject(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	data := map[string]interface{}{
		"id": id,
		"title": "Judul Project",
		"content":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolorum nostrum et non suscipit, veniam dignissimos unde error! Ducimus ipsum id officia suscipit quod libero omnis totam vitae eveniet iste. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur molestias cum voluptatibus ea necessitatibus dignissimos molestiae iste modi fugiat, nihil, consequatur in earum ex odit placeat dicta illo temporibus laudantium!", 
	}

	templ, err := template.ParseFiles("view/detailProject.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"massage": err.Error()})
	}
	return templ.Execute(c.Response(), data)
}