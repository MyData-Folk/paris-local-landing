# syntax=docker/dockerfile:1

# Build stage: Vite / React / Tailwind
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Runtime stage: Nginx static server, Coolify-friendly dynamic port
FROM nginx:1.27-alpine AS runtime

ENV PORT=3000

RUN rm -rf /usr/share/nginx/html/*

# Nginx official image renders /etc/nginx/templates/*.template at container start
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT}/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
