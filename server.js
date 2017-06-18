var express = require('express');

var app = express();


app.get('/', function(req, res) {
  res.send({ 
    ipaddress: req.ip,
    language: req.headers['accept-language'].split(',')[0].split(';')[0],
    software: req.headers['user-agent'].split('(')[1].split(')')[0],
  })
});

app.listen(3000, function(){
  console.log('listening on port 3000...')
})