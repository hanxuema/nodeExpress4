//loading package
var express = require("express");
var debug = require("debug")("app");
var path = require("path");
var sql = require("mssql");

//config
var app = express();
const port = process.env.PORT || 3000;
const config = {
  user: "xavier",
  password: "+Gehai2022",
  server: "xadventureworks.database.windows.net", // You can use 'localhost\\instance' to connect to named instance
  database: "AdventureWorks",

  options: {
    encrypt: true // Use this if you're on Windows Azure
  }
};
//setup
 sql.connect(config).catch(err => debug(err));
// const request = new sql.Request();
// request.query("select * from saleslt.product").then(result => {
//   console.log(request);
// });



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

const nav = [
  { link: "/books", title: "Books" },
  { link: "/authors", title: "Authors" }
];

const bookRouter = require("./src/routes/bookRoutes")(nav);
app.use("/books", bookRouter);

app.get("/", (req, res) => {
  res.render("index", {
    nav: [
      { link: "/books", title: "Books" },
      { link: "/authors", title: "Authors" }
    ],
    title: "Library"
  });
  // res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(3000, function() {
  console.log("listening on port 3000");
});
