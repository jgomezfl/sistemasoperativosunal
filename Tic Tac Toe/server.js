const app = require('express')();
const serverHTTP = require('http').Server(app);
const PORT = 3000 || process.env.PORT;
const Salas = ["Microsoft","IBM","Oracle","SAP","Adobe","Apple","Minix"]

const Lista = [];

io = require('socket.io')(serverHTTP, {
    cors:{
        origin: '*',
    }
});

io.on('connection', function(socket){

    for(let i of Salas){
        socket.on(('send-palabra-'+i), function(data){
            socket.emit(('palabras-'+i),data)
            socket.broadcast.emit(('palabras-'+i),data)
        })

        socket.on(('send-name-'+i), function(data){
            socket.emit(('name-'+i), data)
            socket.broadcast.emit(('name-'+i),data)
        })
    }
    socket.on('send-intento', function(data){
        socket.emit('intento', data)
        console.log(data)
        socket.broadcast.emit('intento', data)
    })
    socket.on('send-turno', function(data){
        socket.emit('turno',data)
        console.log(data)
        socket.broadcast.emit('turno', data)
    })
})

serverHTTP.listen(PORT, ()=>{
    console.log('server running in 3000');
})