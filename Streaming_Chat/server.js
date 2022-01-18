//Guardamos en la constante app la libreria express
const app = require('express')();
//A continuación a partir de la libreria express creamos un servido http
const serverHTTP = require('http').Server(app);
//Creamos una lista para almacenar los emensajes
const Messages = []
//La construcción de esta variable io es de esta forma para permitir el acceso de cualquier origen
io = require('socket.io')(serverHTTP, {
    cors: {
      origin: '*',
    }
});

io.on('connection', function(socket){
    socket.on('send-message', function(data){
        Messages.push(data)
        socket.emit('text-event', Messages)
        socket.broadcast.emit('text-event', Messages)
    })
})

serverHTTP.listen(3000, () => {
    console.log('server running in 3000');
});