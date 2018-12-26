var express = require("express");
const bookRouter = express.Router();

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
    nav: [
      { link: "/books", title: "Books" },
      { link: "/authors", title: "Authors" }
    ],
    title: "Library",
    books: books
  }); 
});

bookRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("bookView", {
        nav: [
          { link: "/books", title: "Books" },
          { link: "/authors", title: "Authors" }
        ],
        title: "Library",
        books: books[id]
      }); 
  res.send("hello single books");
});

module.exports = bookRouter;
