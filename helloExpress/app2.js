var express = require('express')
  , app = express(); 

app.get('/', function(req, res){
  res.send('Bem vindo ao mundo js');
});

app.listen(3000);