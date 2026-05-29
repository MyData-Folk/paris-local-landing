# ============================================================
# Paris Local - correctif mobile réel + Coolify 503 + PR GitHub
# ============================================================

$REPO_URL = "https://github.com/MyData-Folk/paris-local-landing.git"
$SOURCE_DIR = "C:\Users\Farouk\Downloads\paris-local-mobile-real-fix-coolify"
$WORK_DIR = "C:\Users\Farouk\Downloads\repo-paris-local-mobile-real-fix"
$BRANCH_NAME = "fix-real-mobile-ux-coolify-2026"

if (!(Test-Path $SOURCE_DIR)) {
    Write-Host "ERREUR : le dossier source n'existe pas : $SOURCE_DIR" -ForegroundColor Red
    Write-Host "Dézippe d'abord le fichier dans : C:\Users\Farouk\Downloads\paris-local-mobile-real-fix-coolify" -ForegroundColor Yellow
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

Get-ChildItem -Force $WORK_DIR | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force
Get-ChildItem -Path $SOURCE_DIR -Force | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $WORK_DIR -Recurse -Force
}

git status
git add -A
git commit -m "Fix real mobile UX and Coolify deployment"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Aucun commit créé ou erreur pendant le commit." -ForegroundColor Yellow
}

git push -u origin $BRANCH_NAME
if ($LASTEXITCODE -ne 0) { exit 1 }

if (Get-Command gh -ErrorAction SilentlyContinue) {
    gh pr create `
        --title "Fix real mobile UX and Coolify deployment" `
        --body "Correction de l'affichage sur smartphone réel : viewport 100svh, safe-area iOS/Android, réduction des effets lourds mobile, espacements et titres responsive. Conservation du Dockerfile Coolify avec port 3000, healthcheck /health et Nginx dynamique." `
        --base main `
        --head $BRANCH_NAME
} else {
    Write-Host "Branche poussée. GitHub CLI n'est pas installé, crée la PR manuellement depuis GitHub." -ForegroundColor Yellow
}

Write-Host "Terminé. Dans Coolify : port exposé 3000, healthcheck /health, start command vide." -ForegroundColor Green
