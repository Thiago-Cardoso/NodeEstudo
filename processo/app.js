
/**
 * Module dependencies.
 */

// app.js
var express = require('express')
  , fs = require('fs')
  , app = express()
  , logFile = fs.createWriteStream('./app.log', {flags: 'a'});
 
app.configure(function(){
  app.use(express.logger({stream: logFile}));
  app.use(express.methodOverride());
  app.use(app.router);
});
 
app.get('/', function(req, res){
  res.end("Hello World");
});
 
app.listen(3000, function(){
  console.log('Hello world running...');
});