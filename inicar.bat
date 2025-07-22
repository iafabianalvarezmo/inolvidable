@echo off
title musica_del_recuerdo
echo Iniciando la aplicacion...

:: Navega a la ruta COMPLETA de tu proyecto
cd /d "C:\Users\Fabian\Desktop\MyWebSite\musica_del_recuerdo"

:: Ejecuta el comando para iniciar el servidor de desarrollo
npm run dev

:: Mantiene la ventana abierta si hay un error para que puedas leerlo
pause