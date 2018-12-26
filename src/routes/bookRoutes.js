var express = require("express");
const bookRouter = express.Router();
const sql = require("mssql");
const debug = require("debug")("app:bookRoutes");
function router(nav) {
  const books = [
    {
      title: "war and peace",
      genre: "historical",
      author: "Lev",
      read: false
    },
    {
      title: "war and peace",
      genre: "historical",
      author: "Lev",
      read: false
    },
    {
      title: "war and peace",
      genre: "historical",
      author: "Lev",
      read: false
    }
  ];

  bookRouter.route("/").get((req, res) => {
   var request = new sql.Request();

    request.query("select * from saleslt.product").then(result => {
        console.log(result);
    });
    //   console.log(result);
      res.render("bookListView", {
        nav,
        title: "Library",
        books: books
      });
    });
//   });

  bookRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("bookView", {
      nav,
      title: "Library",
      book: books[id]
    });
    //res.send("hello single books");
  });

  return bookRouter;
}
module.exports = router;
