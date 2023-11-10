import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [books, setBooks] = useState([]);

  // useEffect runs a function upon the component/page rendering, the array is necessary for useEffect to pass dependencies but we don't have any here so it remains empty
  useEffect(() => {
    getBooks();
  }, []);

  // call the API to get the books from the server and assign them to the book const
  async function getBooks() {
    const API = `http://localhost:8080/books/`;
    const res = await axios.get(API);
    setBooks(res.data);
  }

  // click the button, delete the relevant book by id, "refresh" the page via getBooks
  async function deleteBook(id) {
    const API = `http://localhost:8080/books/${id}`;
    await axios.delete(API);
    getBooks();
  }

  // map through our books array and render the relevent info
  // also unsure about the line after Form, are we passing those as props?
  return (
    <>
      <h1>Can-o-Books</h1>
      {books.map((book) => {
        return (
          <div key={book._id}>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>Read? {book.status ? "✅" : "❌"}</p>
            <button onClick={() => deleteBook(book._id)}>
              Delete this book
            </button>
            <Form book={book} getBooks={getBooks} />
          </div>
        );
      })}
      <h2>Add a book</h2>
      <Form books={books} setBooks={setBooks} />
    </>
  );
}

export default App;
