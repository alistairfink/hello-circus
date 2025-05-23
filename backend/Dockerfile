FROM golang:1.21

WORKDIR /app
COPY . .

RUN go build -o app ./cmd/server

EXPOSE 8080
CMD ["./app"] 