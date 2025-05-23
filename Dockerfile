# Stage 1: Build frontend
FROM node:20-alpine as frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Build backend
FROM golang:1.21-alpine as backend-builder
WORKDIR /app
COPY backend/ ./
RUN CGO_ENABLED=0 GOOS=linux go build -o backend ./cmd/server

# Stage 3: Final image
FROM nginx:alpine
WORKDIR /app

# Copy the backend binary
COPY --from=backend-builder /app/backend /app/backend

# Copy the frontend build
COPY --from=frontend-builder /app/frontend/dist /usr/share/nginx/html

# Copy nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf

CMD nginx && /app/backend