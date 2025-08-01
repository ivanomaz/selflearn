@echo off
title Build Sito Docusaurus
echo ========================================
echo       Generazione sito statico...
echo ========================================
REM Controllo se node_modules esiste
IF NOT EXIST node_modules (
    echo >> node_modules non trovato. Eseguo "npm install"...
    call npm install
)

call npm run build

echo ========================================
echo     Build completata!
echo     File generati nella cartella "build"
echo ========================================
pause
