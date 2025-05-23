# Hello Circus

A modern full-stack application built with React (TypeScript + Tailwind CSS) for the frontend, Go for the backend API, and PostgreSQL for data persistence. The application is fully containerized and can be run either in development mode or using Docker containers.

## About

Hello Circus is a revolutionary career transition platform designed specifically for software engineers looking to pursue their dreams under the big top. Our platform bridges the gap between the tech world and the circus arts, helping talented developers transform their logical precision and problem-solving skills into graceful aerial performances, mesmerizing juggling acts, and spectacular acrobatic feats.

Whether you're a full-stack developer yearning to become a trapeze artist, or a DevOps engineer dreaming of clown school, Hello Circus provides:
- Personalized matching with circus companies worldwide
- Skills assessment to map your tech expertise to circus disciplines
- Training program recommendations
- Community support from other tech-to-circus transitioners
- Resume translation (from Git commits to circus achievements)

Visit us at [hellocircus.app.alistairfink.com](https://hellocircus.app.alistairfink.com) to begin your journey from debugging code to dazzling audiences.

## Project Structure

```
.
├── frontend/         # React + TypeScript + Tailwind CSS frontend
├── backend/         # Go backend
│   ├── cmd/        # Application entrypoints
│   └── internal/   # Internal packages
├── docker-compose.yml # Docker composition configuration
├── Dockerfile        # Backend service Dockerfile
├── default.conf      # Nginx configuration
└── Makefile         # Build and deployment automation
```

## Prerequisites

For local development:
- Node.js (v18 or later)
- Go (v1.21 or later)
- PostgreSQL (v14 or later)

For Docker deployment:
- Docker
- Docker Compose

## Development Setup

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a `.env` file in the backend directory with the following content:
   ```
   PORT=8080
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_NAME=hello_circus
   ```

3. Start the server:
   ```bash
   go run cmd/api/main.go
   ```

The backend API will be available at `http://localhost:8080`

### Database Setup

1. Create a PostgreSQL database:
   ```bash
   createdb hello_circus
   ```

2. The application will automatically connect to the database using the credentials provided in the `.env` file.

## Docker Deployment

The application can be run entirely using Docker containers. This setup includes:
- Frontend service
- Backend API service
- PostgreSQL database

To start the application using Docker:

```bash
docker-compose up -d
```

The services will be available at:
- Frontend: http://localhost:5001
- Backend API: http://localhost:5002
- PostgreSQL: localhost:5432

Environment variables for the database in Docker:
- Database Name: hellocircus
- Username: hellocircus
- Password: hellocircus

## API Endpoints

- `GET /api/health` - Health check endpoint

## Development

- Frontend code is in the `frontend/src` directory
- Backend code is in the `backend/cmd` and `backend/internal` directories
- Database configuration is in `backend/internal/database`

## Build and Deployment

The project includes a Makefile for common operations. Key commands:
```bash
make build    # Build the application
make run      # Run the application
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request 