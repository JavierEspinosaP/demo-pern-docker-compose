# Usar una imagen base de Node
FROM node:14

# Crear un directorio para la app
WORKDIR /app

# Instalar dependencias
COPY package*.json ./

RUN npm install

# Copiar el resto del código de la app
COPY . .

# Exponer el puerto en el que la app se ejecutará
EXPOSE 4000

# Comando para iniciar la app
CMD [ "node", "app.js" ]
