.PHONY: up down build migrate-up migrate-down

up:
	docker-compose up --build

down:
	docker-compose down

build:
	docker-compose build

migrate-up:
	docker-compose exec backend go run cmd/migrate/main.go up

migrate-down:
	docker-compose exec backend go run cmd/migrate/main.go down 