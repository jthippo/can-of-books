const mongoose = require("mongoose");

// define schema
const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: Boolean,
});

// create model called "Book" with schema of bookSchema
const Book = mongoose.model("Book", bookSchema);

// export model so we can use it other places
module.exports = Book;
