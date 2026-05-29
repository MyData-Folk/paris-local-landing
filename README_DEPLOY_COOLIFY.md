# Déploiement Coolify

Configuration recommandée :

- Build Pack : Dockerfile
- Port exposé : 80
- Healthcheck path : /health
- Start command : laisser vide

Ce Dockerfile compile l'application Vite/React avec Node 22 puis sert le dossier `dist` avec Nginx.
