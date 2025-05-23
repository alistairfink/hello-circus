FROM postgres:16

# Install dos2unix
RUN apt-get update && apt-get install -y dos2unix && rm -rf /var/lib/apt/lists/*

# Copy migrations in order
COPY internal/db/migrations/001_create_circuses.sql /docker-entrypoint-initdb.d/1-schema.sql
COPY internal/db/migrations/002_insert_sample_data.sql /docker-entrypoint-initdb.d/2-data.sql

# Make sure the scripts are executable and have proper line endings
RUN chmod a+r /docker-entrypoint-initdb.d/* && \
    dos2unix /docker-entrypoint-initdb.d/* 