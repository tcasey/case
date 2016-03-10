var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var chart = require('chart.js');

var app = express();
var port = 3000;

app.use(cors());
app.use(bodyParser.json());






app.listen(port, function() {
  console.log('listening on port: ', port);
});
