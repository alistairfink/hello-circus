-- +migrate Up
CREATE TABLE IF NOT EXISTS circuses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    size VARCHAR(50),
    website VARCHAR(255),
    image_url TEXT,
    tech_stack TEXT[],
    positions TEXT[],
    founded INTEGER,
    is_touring BOOLEAN,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_circuses_name ON circuses(name);
CREATE INDEX idx_circuses_location ON circuses(location);
CREATE INDEX idx_circuses_founded ON circuses(founded);

-- +migrate Down
DROP TABLE IF EXISTS circuses; 