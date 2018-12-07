var express = require('express');
var app = express();
var axios = require('axios');

const keys = require('./keys.js');

const { redditClientId, redditSecretId } = keys;

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/listings', function(req, res) {
  res.send('listings');
});

app.listen(3001, function() {
  console.log('Example app listening on port 3001');
});
