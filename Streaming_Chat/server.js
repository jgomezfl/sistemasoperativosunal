const app = require('express')();
const serverHTTP = require('http').Server(app);

const Messages = []

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