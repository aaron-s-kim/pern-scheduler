-- CREATE DATABASE pernscheduler;
-- \c pernscheduler
CREATE TABLE users (
  users_id serial PRIMARY KEY,
  username VARCHAR (50) UNIQUE NOT NULL,
  email VARCHAR (255) UNIQUE NOT NULL,
  description VARCHAR(255)
);