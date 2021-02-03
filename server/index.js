const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const databaseController = require('./controller/databaseController.js')

server.listen(4200,  ()=> {
    console.log('Servidor corriendo en http://localhost:4200');
});

io.on('connection', socket => {
    console.log('Un cliente se ha conectado');
    databaseController.getData(data=>{
        socket.emit('dbmessage', data);
    })
});