// Configuracion Básica de Express
const express = require("express");
require("dotenv").config();

// importacion CORS
const cors = require("cors");

// importar funcion de conexion de BD
const { dbConnection } = require("./database/config");

// console.log(process.env);

// Crear el Servidor de Express
// Creacion Express o aplicacion Express
const app = express();

// Base de Datos
dbConnection();

// CORS
app.use(cors());

// Cuando la persona entre al / mostrarle el index.html o el directorio publico
// Directorio Público
// el use en express es conocido como un middleware y este no es más que una función que se ejecuta en el momento en que alguien hace una petición a mi servidor.
// es una funcion que se ejecuts siemore que pase por un lugar
// el unico middlewarre que voy a implementar aqui por el momento va a ser el necesario para establecer un directorio publico que es express.static() y viene
// el nombre del directorio que le llamaremos public que en realidad es el path pero como estoy en la raiz del proyecto solo quiero indicarle esa carpeta
app.use(express.static("public"));

// Lectura y parseo del body (hay que pasar todas las peticiones por otro middleware)
// Las peticiones que vengan en formato json las voy a procesar aqui y voy a extraer su contenido
app.use(express.json());

// Configuracion de la primera ruta (Rutas) se dispara con los argumentos request y response
// TODO: auth // Crear, Login, Renew del token
app.use("/api/auth", require("./routes/auth"));
//Lo que estoy diciendo acá, es que todo lo que este archivo vaya a exportar lo va a habilitar en esta ruta.

// TODO: CURD: Eventos para actualizar, insertar , poder borrarlos etc, toda la informacion o todos los procedimientos relacionados al manejo de eventos en nuestro calendario
app.use("/api/events", require("./routes/events"));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  // este callback se ejecuta cuando el servidor de express este arriba
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

// Ya tengo un servidor que escucha peticiones get que se hagan al Root, en este caso sería el /

// CREAR VARIABLES DE ENTORNO y Crear un directorio publico en el cual voy a subir una aplicacion web que eventualmente será la aplicacion de React, pero
// por el momento sera un simple sitio web

// hay que instalar el paquete dotenv (npm i dotenv )para usar las variables en node y hay que importarlo arriba en este archivo con require
