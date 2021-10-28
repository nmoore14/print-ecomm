# Start from golang base image
FROM golang:alpine as builder

# Add maintainer info
LABEL maintainer="Nick Moore <nickmoore_1@live.com>"

# Install Git -> Git is required for getting the depenedencies
RUN apk update && apk add --no-cache git

# Set the current working directory inside of the container
WORKDIR /app

# Copy the .mod and .sum files
COPY go.mod go.sum ./

# Download all of the project depenedencies.
RUN go mod download

# Copy src from current dir to working dir
COPY . .

# Build the Go App
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

# Start a new stage from scratch
FROM alpine:latest

RUN apk --no-cache add ca-certificates

WORKDIR /root/

# Copy the pre-built binaries from the previous stage.
COPY --from=builder /app/main .
COPY --from=builder /app/.env .

# Expose port 8080 to the outside
EXPOSE 8080

# Run the executable
CMD ["./main"]
