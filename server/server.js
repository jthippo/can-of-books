const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));

app.get("/", (_, response) => {
  response.json("Hello, it's working");
});

// set up link to database
const Book = require("./models/book");
mongoose.connect(process.env.DATABASE_URL);

// find() accepts an object and filters by any properties it has in it
// request.query is an object, empty by default, but has properties if we add them to the url
// we can change request.query to specific properties if we wish but here we want the whole object
app.get("/books", async (request, response) => {
  const books = await Book.find(request.query);
  response.json(books);
});

// findByIdAndDelete is self-explanatory
// don't really understand params
app.delete("/books/:id", async (request, response) => {
  const deletedBook = await Book.findByIdAndDelete(request.params.id);
  response.json(deletedBook);
});

// create is self explanatory, request.body sends the whole body i guess? documentation is frustratingly vague
app.post("/books", async (request, response) => {
  const newBook = await Book.create(request.body);
  response.json(newBook);
});

// this is essentially a combination of syntax we've used above
app.put("/books/:id", async (request, response) => {
  console.log(request.params.id);
  const updatedBook = await Book.findByIdAndUpdate(
    request.params.id,
    request.body
  );
  response.json(updatedBook);
});
