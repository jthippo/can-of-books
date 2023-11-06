const mongoose = require("mongoose");
// destructure a schema for mongoose?
const { Schema } = mongoose;

// define schema
const bookSchema = new Schema({
  title: String,
  description: String,
  status: String,
});

// don't understand the exact structure here, practice I guess
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
