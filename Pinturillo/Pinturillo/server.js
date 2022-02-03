const app = require('express')();
const serverHTTP = require('http').Server(app);
const opciones = [];
const coordinates= [];

io = require('socket.io')(serverHTTP, {
    cors:{
        origin: '*',
    }
});

io.on('connection', function(socket){
    socket.on('send-option', function(data){
        opciones.push(data)
        socket.emit('text-event', opciones)
        socket.broadcast.emit('text-event', opciones)
    })

    socket.on('send-palabra', function(data){
        socket.emit('palabra', data)
        socket.broadcast.emit('palabra', data)
    })

    socket.on('send-name', function(data){
        socket.emit('name', data)
        socket.broadcast.emit('name', data)
    })
    socket.on('send-coordinates', function(data){
        coordinates.push(data)
        socket.emit('coordinates', coordinates)
        socket.broadcast.emit('coordinates', coordinates)
    })
    socket.on('delete-coord', function(data){
        coordinates.push(data)
        coordinates.length=0
        socket.emit('cor',coordinates)
        socket.broadcast.emit('cor',coordinates)
    })
})

serverHTTP.listen(3000, ()=>{
    console.log('server running in 3000');
})