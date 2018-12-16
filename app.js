var express = require("express");
var debug = require("debug")("app");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css')))

app.use('/js', express.static(path.join(__dirname,'/node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'/node_modules/jquery/dist')))

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(3000, function() {
  console.log("listening on port 3000");
});
