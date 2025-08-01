@echo off
cd /d %~dp0

REM npm run clear
echo Costruzione del sito...
npm run build

echo Deploy su GitHub Pages...
set GIT_USER=ivanomaz
npm run deploy

pause
