package controllers

import (
    "net/http"
    "github.com/nmoore14/backend/api/responses"
)

func (server *Server) Home(w http.ResponseWriter, r *http.Request) {
    responses.JSON(w, http.StatusOK, "Welcome To The Print eComm API")
}
