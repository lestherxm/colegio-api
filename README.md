# API Colegio

## Testear la API
### * Clonar el repositorio mediante el comando `git clone`
### * Ejecuta el comando `npm i` para instalar las dependencias

## Docker Desktop
### * Inicializa Docker Desktop y asegurate de que ningun otro contenedor esté corriendo para evitar problemas con los puertos.
### * Si es la primera vez testeando la API, ejecuta en la carpeta raíz el comando `docker-compose up` para crear el container.
### * Una vez ya tengas un contenedor asociado al proyecto, simplemente levanta ambos servicios (`postgres` y `pgadmin`)
### * Inicia sesion con las credenciales del archivo `docker-compose.yml` en `pgadmin` (en el navegador)
### * Crea una conexion para el usuario root
### * ¿Ayuda? Docker y PostgreSQL -> https://youtu.be/uKlRp6CqpDg?t=576

## Finalmente
### * Ejecuta el comando `node server.js` para correr el servidor
### * Utiliza alguna herramienta para testear los `endpoints` (postman, por ejemplo)


