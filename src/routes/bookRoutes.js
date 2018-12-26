var express = require("express");
const bookRouter = express.Router();


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
    res.render("bookListView", {
      nav,
      title: "Library",
      books: books
    });
  });

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
