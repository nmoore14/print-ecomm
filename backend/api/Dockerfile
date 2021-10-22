FROM golang:1.14.6-alpine3.12 as builder

COPY go.mod go.sum /go/src/gitlab.com/idoko/bucketeer/
WORKDIR /go/src/gitlab.com/idoko/bucketeer
RUN go mod download
COPY . /go/src/gitlab.com/idoko/bucketeer
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o build/bucketeer gitlab.com/idoko/bucketeer


FROM alpine

RUN apk add --no-cache ca-certificates && update-ca-certificates
COPY --from=builder /go/src/gitlab.com/idoko/bucketeer/build/bucketeer /usr/bin/bucketeer

EXPOSE 8080 8080

ENTRYPOINT ["/usr/bin/bucketeer"]
