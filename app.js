var express = require('express');
var debug = require('debug')('app');
var app = express();
var morgan  = require('morgan');

app.use(morgan(''))
app.get('/', function(req, res){
    res.send('Hello from my app.')
})

app.listen(3000, function () {
    console.log("listening on port 3000");
})