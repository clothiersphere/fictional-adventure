var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const mechMarket = require('./mechMarket.js');

const port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/listings', function(req, res, next) {
  mechMarket.getAuthKey().then(data => {
    const authToken = data;
    mechMarket.getPosts(authToken).then(data => {
      console.log('got here');
      res.send(data);
      next();
    });
  });
});

app.listen(port, function() {
  console.log('Example app listening on port 3001');
});
