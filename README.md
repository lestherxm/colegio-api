# API Colegio

## ¿Cómo probar la API?

#### - Clona el repositorio 
```
git clone https://github.com/lestherxm/colegio-api.git 
```
#### - Instala las dependencias
```
npm install
```
### - Inicializa `Docker Desktop`
### - Asegúrate de que ningún otro contenedor esté corriendo para evitar problemas con los puertos.
### - Si ya tienes el contenedor para el proyecto, asegúrate de que ambos servicios estén corriendo (`postgres` y `pgadmin`)
#### - Caso contrario, crea el contenedor para el proyecto ejecutando en la carpeta raiz
```
docker-compose up
```
#### - Inicia sesión con las credenciales del archivo `docker-compose.yml` en `pgadmin` (en el navegador)
#### - Crea una conexion para el usuario root - ¿Ayuda con esto? [Ver este video].[https://youtu.be/uKlRp6CqpDg?t=576]

## Finalmente
### - Inicializa el servidor
```
npm start
```
### - Utiliza alguna herramienta para testear los `API endpoints` (Postman, Thunder Client, etc)


