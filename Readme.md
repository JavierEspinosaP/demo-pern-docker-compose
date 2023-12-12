<h1 align="center">Proyecto PERN</h1>
<p align="center">
 <img src="https://github.com/JavierEspinosaP/demo-mern-docker-compose/assets/103537170/3d755e23-0ed2-4059-9023-96c1ec27f41d" width="700" height="370">
</p>

<p align="center"> En este proyecto se utilizan las tecnologías necesarias para desarrollar una aplicación PERN completa(PostgreSQL, ExpressJS, ReactJS, NodeJS), así como otras interesantes como Sequelize y Redux. Se compone de una base de datos SQL, una API REST y un front desarrollado en ReactJS</p>

## Getting Started

 * 1.- Forkea y clona tu repo
 * 2.- Abre Docker Desktop
 * 3.- En la terminal, sitúate en la carpeta padre (demo-pern-docker-compose) y ejecuta los comandos 
 ``` docker-compose build ``` y ``` docker-compose up ```, esto creará los contenedores de la base de datos, de la API y del proyecto React. Deberías ver algo así 👇

<p align="center">
  <img src="https://github.com/JavierEspinosaP/demo-mern-docker-compose/assets/103537170/0dcc7b64-f990-4069-ad70-c9e9161d5bda" width="700" height="150">
</p>



 * 4.- A continuación vamos a introducir los datos en la BBDD, para ello necesitamos ejecutar dos comandos, uno creará las tablas y otro introducirá los seeds con la información en cada una de ellas.
   Abre una terminal nueva sin cerrar la actual, recuerda acceder a la carpeta clonada antes de introducir nuevos comandos (```cd demo-pern-docker-compose```)
*  5.- Una vez en la carpeta clonada, introduce en terminal:
  
   - "```docker-compose exec api npx sequelize-cli db:migrate```" (Accede al contenedor "api" donde corre el servidor, y crea las tablas en la base de datos.
   - "```docker-compose exec api node utils/seed.js```" (Accede al contenedor "api", y ejecuta el archivo "seed.js" que rellena las tablas con los datos.
   
   Con esto, tu base de datos se habrá rellenado con los libros y géneros necesarios, ya puedes ir a tu navegador y abrir ```http://localhost:3000```, deberá aparecer un formulario para añadir libros y una lista de los que ya existen en BBDD.


## Troubleshooting
#### Es posible que te encuentres con el problema de que el puerto que usa el contenedor con la base de datos esté ocupado (puerto 5432), si es así, puedes solucionarlo de la siguiente forma:

#### Si tienes un sistema operativo Windows 👇

* Abre la terminal CMD y ejecuta el comando "```netstat -aon```", esto te mostrará todos los puertos en uso, debes encontrar el puerto 5432 y apuntar su PID, puede que tu dirección no sea 0.0.0.0 (depende de tu configuración PostgreSQL),
busca en diferentes direcciones

<p align="center">
  <img src="https://github.com/JavierEspinosaP/demo-mern-docker-compose/assets/103537170/073dc521-46e4-4fd5-9e6b-aadbb11aaded" width="400" height="150">
</p>

* Cuando sepas el PID del puerto, ejecuta el comando "```taskkill /F /PID <numero de PID>```", te responderá con un mensaje de "se terminó el proceso con PID X"
* Ahora ya tienes el puerto libre, puedes ejecutar los comandos  ``` docker-compose build ``` y ``` docker-compose up ``` para levantar tus contenedores.

 #### Si tienes Mac 👇

 * En terminal, ejecuta ```lsof -i -P | grep -i listen```, con ello verás los puertos y sus PID's, busca el puerto 5432 y apunta su PID
 * A continuación, ejecuta ```sudo kill -9 <pid>```, introduciendo el PID del puerto, con este comando fuerzas la terminación del proceso.
 * Puedes verificar si hay algo en ese puerto con ```sudo lsof -i :5432```, si no hay nada, vuelve a ejecutar los comandos ``` docker-compose build ``` y ``` docker-compose up ``` para levantar los contenedores.

## Endpoints API REST - examples

### Endpoints Books

Create new book

POST http://localhost:4000/books

Body:
Example 1
```
{
  "name": "Fray Perico y su borrico",
  "price": 10
}
```
Example 2
```
{
  "name": "El Guardián entre el Centeno",
  "price": 12
}
```
Return all books

GET http://localhost:4000/books

Edit an existent post by ID

PUT http://localhost:4000/books/:id

Body with new data:
```
{
  "name": "1984",
  "price": 24
}
```

Delete an existent post by ID

DELETE PUT http://localhost:4000/books/:id

### Endpoints Genres

Get all genres

GET http://localhost:4000/genres

Create new genre

POST http://localhost:4000/genres

Body:
```
{
  "name": "Science Fiction"
}
```
