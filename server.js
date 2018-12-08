var express = require('express');
var app = express();
const mechMarket = require('./mechMarket.js');

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/listings', function(req, res) {
  mechMarket.getAuthKey();
  res.send('listings');
});

app.listen(3001, function() {
  console.log('Example app listening on port 3001');
});
