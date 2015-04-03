var express = require('express'),
    entities = require('./routes/entities');

var server = express(); // better instead
var server2 = express(); // better instead

server.configure(function(){
  
  server.use(express.static(__dirname + '/'));
});

server.listen(3001);

