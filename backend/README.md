# Debudget backend solution

## Requirements

- Node.js (>18.0.0) - consider using [nvm](https://github.com/nvm-sh/nvm) to manage your Node.js versions
- Docker (latest version) - you can download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Quick start

- Contact Rado at [radek.luczak@icloud.com](mailto:radek.luczak@icloud.com) to obtain the required environment variables for your `.env` file
  ```bash
  touch .env
  ```
- Install dependencies
  ```bash
  npm install
  ```
- Create a Docker container with PostgreSQL and pgAdmin
  ```bash
  docker compose up
  ```
- Finally, start the project
  ```bash
  npm start
  ```
