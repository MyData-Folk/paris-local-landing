# Dockerfile de production pour Coolify
# App React / Vite / Tailwind servie par Nginx

FROM node:22-alpine AS builder

WORKDIR /app

# Installation reproductible des dépendances
COPY package*.json ./
RUN npm ci

# Build de l'application
COPY . .
RUN npm run build

# Image finale légère avec Nginx
FROM nginx:1.27-alpine AS runner

# Configuration SPA : fallback vers index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Fichiers générés par Vite
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
