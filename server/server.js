var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    contentful = require('./controllers/contentful.js'),
    keys = require('./keys');

var app = express();
var port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + './../docs'));





app.listen(port, function() {
  console.log('listening on port: ', port);
});
