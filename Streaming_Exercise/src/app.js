//Guardamos en una constante en la libreria express
const express = require('express'); 
const { Socket } = require('socket.io');
//Guardamos en una constante llamada app el resultado de la función express
//Este objeto app es el que me permite iniciar el servidor
const app = express();
//Creamos un servidor http a partir de la libreria express, para todas las conexiones que necesitamos
const http = require('http').Server(app);
//Usamos socket.io para generar una conexión bidireccional en tiempo real entre clientes y servidores web
const io = require('socket.io')(http);
//A continuación generamos las rutas
app.use(require('./routes/Streaminng_Exercise.routes'));
//Luego le decimos donde vamos a cargar los archivos estaticos
app.use(express.static(__dirname+"/public"))
//Creamos un evento para generar una conexion, estamos  creando un canal de comunicación
io.on('connection', (socket) =>{
    //Ahora genramos un evento 'stream' que enviará la imagen
    socket.on('stream', (image) => {
        //Emitimos el evento, la imagen la capturaremos desde el fichero html
        socket.broadcast.emit('stream', image);
    })
})
//Exportamos http para poder utilizarlo desde index.js
module.exports = http;