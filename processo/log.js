// log.js
var spawn = require('child_process').spawn
  , tail = spawn('tail', ['-f', './app.log']);
 
tail.stdout.setEncoding('utf8');
tail.stdout.on('data', function(data){
  console.log(data);
});