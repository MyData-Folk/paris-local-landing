# --- Étape de Build ---
FROM node:20-alpine AS build

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm ci

# Copie du reste du code source
COPY . .

# Build de l'application de production
RUN npm run build

# --- Étape de Production ---
FROM nginx:alpine

# Copie de la configuration Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie du build statique vers le répertoire d'Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposition du port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
