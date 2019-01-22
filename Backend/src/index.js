var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const messages = [];

io.on('connection', function(socket){
    console.log('a user connected');

    // Send previous messages on a users initial connect
    socket.emit("messages", messages);

    // Send consecutive messages on new messages
    socket.on("message", (msg) => {
        // Add to persistent messages
        messages.push(msg);
        // Send to all users
        io.emit("message", msg);
    })
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
