package handlers

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
	"github.com/lib/pq"

	"hello-circus/internal/models"
)

type CircusHandler struct {
	db *sql.DB
}

func NewCircusHandler(db *sql.DB) *CircusHandler {
	return &CircusHandler{db: db}
}

func (h *CircusHandler) Routes() chi.Router {
	r := chi.NewRouter()

	r.Get("/", h.ListCircuses)
	r.Post("/", h.CreateCircus)
	r.Get("/{id}", h.GetCircus)
	r.Put("/{id}", h.UpdateCircus)
	r.Delete("/{id}", h.DeleteCircus)

	return r
}

func (h *CircusHandler) ListCircuses(w http.ResponseWriter, r *http.Request) {
	query := `
		SELECT id, name, description, location, size, website, image_url,
			   tech_stack, positions, founded, is_touring, created_at, updated_at
		FROM circuses
		ORDER BY name ASC
	`

	rows, err := h.db.Query(query)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var circuses []models.Circus
	for rows.Next() {
		var c models.Circus
		err := rows.Scan(
			&c.ID, &c.Name, &c.Description, &c.Location, &c.Size,
			&c.Website, &c.ImageURL, pq.Array(&c.TechStack),
			pq.Array(&c.Positions), &c.Founded, &c.IsTouring,
			&c.CreatedAt, &c.UpdatedAt,
		)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		circuses = append(circuses, c)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(circuses)
}

func (h *CircusHandler) GetCircus(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	if err != nil {
		http.Error(w, "Invalid circus ID", http.StatusBadRequest)
		return
	}

	var c models.Circus
	err = h.db.QueryRow(`
		SELECT id, name, description, location, size, website, image_url,
			   tech_stack, positions, founded, is_touring, created_at, updated_at
		FROM circuses
		WHERE id = $1
	`, id).Scan(
		&c.ID, &c.Name, &c.Description, &c.Location, &c.Size,
		&c.Website, &c.ImageURL, pq.Array(&c.TechStack),
		pq.Array(&c.Positions), &c.Founded, &c.IsTouring,
		&c.CreatedAt, &c.UpdatedAt,
	)

	if err == sql.ErrNoRows {
		http.Error(w, "Circus not found", http.StatusNotFound)
		return
	} else if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(c)
}

func (h *CircusHandler) CreateCircus(w http.ResponseWriter, r *http.Request) {
	var c models.Circus
	if err := json.NewDecoder(r.Body).Decode(&c); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err := h.db.QueryRow(`
		INSERT INTO circuses (
			name, description, location, size, website, image_url,
			tech_stack, positions, founded, is_touring
		) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
		RETURNING id, created_at, updated_at
	`,
		c.Name, c.Description, c.Location, c.Size, c.Website, c.ImageURL,
		pq.Array(c.TechStack), pq.Array(c.Positions), c.Founded, c.IsTouring,
	).Scan(&c.ID, &c.CreatedAt, &c.UpdatedAt)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(c)
}

func (h *CircusHandler) UpdateCircus(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	if err != nil {
		http.Error(w, "Invalid circus ID", http.StatusBadRequest)
		return
	}

	var c models.Circus
	if err := json.NewDecoder(r.Body).Decode(&c); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	c.ID = id
	err = h.db.QueryRow(`
		UPDATE circuses SET
			name = $1, description = $2, location = $3, size = $4,
			website = $5, image_url = $6, tech_stack = $7, positions = $8,
			founded = $9, is_touring = $10, updated_at = CURRENT_TIMESTAMP
		WHERE id = $11
		RETURNING updated_at
	`,
		c.Name, c.Description, c.Location, c.Size, c.Website, c.ImageURL,
		pq.Array(c.TechStack), pq.Array(c.Positions), c.Founded, c.IsTouring,
		id,
	).Scan(&c.UpdatedAt)

	if err == sql.ErrNoRows {
		http.Error(w, "Circus not found", http.StatusNotFound)
		return
	} else if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(c)
}

func (h *CircusHandler) DeleteCircus(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.ParseInt(chi.URLParam(r, "id"), 10, 64)
	if err != nil {
		http.Error(w, "Invalid circus ID", http.StatusBadRequest)
		return
	}

	result, err := h.db.Exec("DELETE FROM circuses WHERE id = $1", id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if rowsAffected == 0 {
		http.Error(w, "Circus not found", http.StatusNotFound)
		return
	}

	w.WriteHeader(http.StatusNoContent)
} 