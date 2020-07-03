var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user is connected...');
    /*socket.on('disconnect', () => {
        console.log('... user disconnected.');
    });*/
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

http.listen(8080, () => {
    console.log('listening on *:8080');
});