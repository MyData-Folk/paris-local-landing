# Coolify deployment

Recommended settings:

- Build Pack: Dockerfile
- Port / Exposed port: 3000
- Healthcheck path: /health
- Start command: leave empty

This Dockerfile builds the Vite/React app, then serves `dist` with Nginx.
Nginx listens on the `PORT` environment variable, defaulting to 3000, which avoids common Coolify 503 reverse-proxy issues.
