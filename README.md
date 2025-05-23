# Hello Circus

A full-stack application built with React (TypeScript + Tailwind CSS), Go, and PostgreSQL.

## Project Structure

```
.
├── frontend/          # React + TypeScript + Tailwind CSS frontend
├── backend/          # Go backend
│   ├── cmd/         # Application entrypoints
│   └── internal/    # Internal packages
└── README.md
```

## Prerequisites

- Node.js (v18 or later)
- Go (v1.21 or later)
- PostgreSQL (v14 or later)

## Setup Instructions

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

## API Endpoints

- `GET /api/health` - Health check endpoint

## Development

- Frontend code is in the `frontend/src` directory
- Backend code is in the `backend/cmd` and `backend/internal` directories
- Database configuration is in `backend/internal/database` 