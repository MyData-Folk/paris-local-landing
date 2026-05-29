# Déploiement Coolify — Paris Local Landing

Cette version contient un `Dockerfile` prêt pour Coolify.

## Paramètres recommandés dans Coolify

- Build Pack : **Dockerfile**
- Port exposé : **80**
- Domaine : ton domaine ou sous-domaine de présentation
- Commande de démarrage : laisser vide, elle est déjà dans le Dockerfile

## Variables d'environnement

Aucune variable n'est nécessaire pour afficher la landing page.

Attention : le formulaire EmailJS utilise encore des clés à remplacer dans le code si tu veux activer l'envoi réel des messages.

## Fonctionnement

Le Dockerfile :

1. installe les dépendances avec `npm ci` ;
2. génère le build avec `npm run build` ;
3. sert le dossier `dist` avec Nginx ;
4. applique un fallback SPA vers `index.html`.
