# syntax=docker/dockerfile:1

# Build stage: Vite / React / Tailwind
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first for better Docker cache
COPY package*.json ./
RUN npm ci

# Copy source and build static files
COPY . .
RUN npm run build

# Runtime stage: lightweight Nginx static server
FROM nginx:1.27-alpine AS runtime

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Custom SPA config for Vite/React routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app from build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
