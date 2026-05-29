# Déploiement Coolify

Réglages recommandés :

- Build Pack : Dockerfile
- Port exposé : 3000
- Healthcheck path : /health
- Start command : laisser vide

Ce Dockerfile compile l'application Vite/React, puis sert `dist` avec Nginx.
Nginx écoute sur la variable `PORT`, avec 3000 par défaut, pour éviter les erreurs 503 de reverse proxy.
