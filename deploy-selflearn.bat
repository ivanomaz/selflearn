@echo off
cd /d %~dp0

echo Build del sito...
npm run build

echo Deploy su GitHub Pages...
set GIT_USER=ivanomaz
npm run deploy

echo Deploy completato!
pause
