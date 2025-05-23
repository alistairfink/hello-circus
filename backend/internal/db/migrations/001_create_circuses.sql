CREATE TABLE circuses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    size VARCHAR(50),
    website VARCHAR(255),
    image_url VARCHAR(255),
    tech_stack TEXT[],
    positions TEXT[],
    founded INTEGER,
    is_touring BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
); 