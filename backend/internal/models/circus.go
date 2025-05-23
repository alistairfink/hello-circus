package models

import (
	"time"
)

type Circus struct {
	ID          int64     `json:"id" db:"id"`
	Name        string    `json:"name" db:"name"`
	Description string    `json:"description" db:"description"`
	Location    string    `json:"location" db:"location"`
	Size        string    `json:"size" db:"size"` // small, medium, large
	Website     string    `json:"website" db:"website"`
	ImageURL    string    `json:"imageUrl" db:"image_url"`
	
	// Tech-specific fields
	TechStack   []string  `json:"techStack" db:"tech_stack"`
	Positions   []string  `json:"positions" db:"positions"`
	
	// Additional info
	Founded     int       `json:"founded" db:"founded"`
	IsTouring   bool      `json:"isTouring" db:"is_touring"`
	
	// Timestamps
	CreatedAt   time.Time `json:"createdAt" db:"created_at"`
	UpdatedAt   time.Time `json:"updatedAt" db:"updated_at"`
} 