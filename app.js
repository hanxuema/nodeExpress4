var express = require("express");
var debug = require("debug")("app");
var path = require("path");

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public/")));
app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
);

app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/jquery/dist"))
);
app.set("views", __dirname + "/src/views");
// app.set("views","./src/views");
app.set("view engine", "ejs");
 

const bookRouter = require('./src/routes/bookRoutes');
app.use('/books', bookRouter);

app.get("/", (req, res) => {
  res.render('index', {
    nav:[ 
      {link: '/books', title : 'Books'},
      {link: '/authors', title : 'Authors'}],
    title: 'Library'
  })
  // res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(3000, function() {
  console.log("listening on port 3000");
});
