package main

import (
	"context"
	"fmt"
	"gitlab.com/idoko/bucketeer/db"
	"gitlab.com/idoko/bucketeer/handler"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	addr := ":8080"
	listener, err := net.Listen("tcp", addr)
	if err != nil {
		log.Fatalf("Error occurred: %s", err.Error())
	}

	dbUser, dbPassword, dbName :=
		os.Getenv("POSTGRES_USER"),
		os.Getenv("POSTGRES_PASSWORD"),
		os.Getenv("POSTGRES_DB")
	database, err := db.Initialize(dbUser, dbPassword, dbName)
	if err != nil {
		log.Fatalf("Could not set up database: %v", err)
	}
	defer database.Conn.Close()
	
	httpHandler := handler.NewHandler(database)
	server := &http.Server{
		Handler: httpHandler,
	}

	go func() {
		server.Serve(listener)
	}()

	defer Stop(server)

	log.Printf("Started server on %s", addr)

	// listen for ctrl+c signal from terminal
	ch := make(chan os.Signal, 1)
	signal.Notify(ch, syscall.SIGINT, syscall.SIGTERM)
	log.Println(fmt.Sprint(<-ch))
	log.Println("Stopping API server.")
}

func Stop(server *http.Server) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := server.Shutdown(ctx); err != nil {
		log.Printf("Could not shut down server correctly: %v\n", err)
		os.Exit(1)
	}
}
