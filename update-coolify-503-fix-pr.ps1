# ============================================================
# Fix Coolify 503 - Docker port dynamique + PR GitHub
# Projet : Paris Local landing
# ============================================================

$REPO_URL = "https://github.com/MyData-Folk/paris-local-landing.git"
$SOURCE_DIR = "C:\Users\Farouk\Downloads\mobile-optimization-and-light-mode"
$WORK_DIR = "C:\Users\Farouk\Downloads\repo-fix-coolify-503-paris-local"
$BRANCH_NAME = "fix-coolify-503-dynamic-port"

if (!(Test-Path $SOURCE_DIR)) {
    Write-Host "ERREUR : le dossier source n'existe pas : $SOURCE_DIR" -ForegroundColor Red
    exit 1
}

if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "ERREUR : Git n'est pas installé ou pas disponible dans PowerShell." -ForegroundColor Red
    exit 1
}

if (Test-Path $WORK_DIR) {
    Remove-Item -Recurse -Force $WORK_DIR
}

git clone $REPO_URL $WORK_DIR
if ($LASTEXITCODE -ne 0) { exit 1 }

Set-Location $WORK_DIR
git checkout -b $BRANCH_NAME
if ($LASTEXITCODE -ne 0) { exit 1 }

# Remplace le contenu applicatif par ton dossier local
Get-ChildItem -Force $WORK_DIR | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force
Get-ChildItem -Path $SOURCE_DIR -Force | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $WORK_DIR -Recurse -Force
}

# Dockerfile Coolify-friendly : Nginx écoute sur $PORT, 3000 par défaut
@'
# syntax=docker/dockerfile:1

FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runtime

ENV PORT=3000

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT}/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
'@ | Set-Content -Path "$WORK_DIR\Dockerfile" -Encoding UTF8

@'
server {
    listen ${PORT};
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    location = /health {
        access_log off;
        add_header Content-Type text/plain;
        return 200 "ok\n";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(?:css|js|mjs|json|png|jpg|jpeg|gif|svg|webp|ico|woff2?|ttf|eot)$ {
        try_files $uri =404;
        access_log off;
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
    }

    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
'@ | Set-Content -Path "$WORK_DIR\nginx.conf.template" -Encoding UTF8

@'
node_modules
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

.git
.gitignore
.github

.env
.env.*
!.env.example

.DS_Store
Thumbs.db

coverage
dist
build
.vite
.cache
'@ | Set-Content -Path "$WORK_DIR\.dockerignore" -Encoding UTF8

# Supprime l'ancien nginx.conf si présent pour éviter la confusion
if (Test-Path "$WORK_DIR\nginx.conf") {
    Remove-Item -Force "$WORK_DIR\nginx.conf"
}

@'
# Coolify deployment

Recommended settings:

- Build Pack: Dockerfile
- Port / Exposed port: 3000
- Healthcheck path: /health
- Start command: leave empty

This Dockerfile builds the Vite/React app, then serves `dist` with Nginx.
Nginx listens on the `PORT` environment variable, defaulting to 3000, which avoids common Coolify 503 reverse-proxy issues.
'@ | Set-Content -Path "$WORK_DIR\README_DEPLOY_COOLIFY.md" -Encoding UTF8

Write-Host "Vérification des fichiers clés :" -ForegroundColor Cyan
Get-ChildItem -Force Dockerfile, nginx.conf.template, .dockerignore, package.json, package-lock.json, vite.config.ts -ErrorAction SilentlyContinue

git status
git add -A
git commit -m "Fix Coolify 503 with dynamic Nginx port"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Aucun commit créé ou erreur pendant le commit." -ForegroundColor Yellow
}

git push -u origin $BRANCH_NAME
if ($LASTEXITCODE -ne 0) { exit 1 }

if (Get-Command gh -ErrorAction SilentlyContinue) {
    gh pr create `
        --title "Fix Coolify 503 deployment" `
        --body "Correction du déploiement Coolify : Nginx écoute maintenant sur la variable PORT avec 3000 par défaut, Dockerfile multi-stage Vite/React, healthcheck /health et suppression de l'ancien nginx.conf statique." `
        --base main `
        --head $BRANCH_NAME
} else {
    Write-Host "Branche poussée. GitHub CLI n'est pas installé, crée la PR manuellement." -ForegroundColor Yellow
}

Write-Host "Terminé. Dans Coolify, configure le port exposé sur 3000 et le healthcheck sur /health." -ForegroundColor Green
