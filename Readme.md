# Proyecto MERN completo

## Getting Started

 * 1.- Forkea y clona tu repo
 - 2.- Abre Docker Desktop
 - 3.- En la terminal, sitúate en la carpeta padre (demo-mern) y ejecuta los comandos 
 ``` docker-compose build ``` y ``` docker-compose up ```, esto creará los contenedores de la base de datos, de la API y del proyecto React.
 - 4.- A continuación vamos a introducir los datos en la BBDD, para ello necesitamos ejecutar dos comandos, uno creará las tablas y otro introducirá los seeds con la información en cada una de ellas, los comandos son "```docker-compose exec api npx sequelize-cli db:migrate```" y "```docker-compose exec api node utils/seed.js```"