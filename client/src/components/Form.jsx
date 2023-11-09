import axios from "axios";
import { useState } from "react";

// WORK THIS BIT OUT MORE
// passing books and setBooks as props from App.jsx i think?
// formData state is blank(ish) object
export default function Form({ books, setBooks, book, setBook }) {
  const [formData, setFormData] = useState(
    book ?? {
      title: "",
      description: "",
      status: false,
    }
  );

  //event listener, so pass event as a parameter
  // i don't understand the complexities here but it seems we don't need to (much like the random number code), the gist is:
  // if the event is a checkbox, check it; otherwise formData = what is written in the box
  function handleChange(event) {
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  }

  // function run when the submit button is hit
  // .post parameters are (server URL, data to send)
  async function addBook(event) {
    event.preventDefault();
    const API = "http://localhost:8080/books";
    const res = await axios.post(API, formData);
    setBooks([...books, res.data]);
  }
  // combo of concepts from above
  async function updateBook(event) {
    event.preventDefault();
    const API = `http://localhost:8080/books/${book._id}`;
    await axios.put(API, formData);
    setBook(formData);
  }

  return (
    <form onSubmit={book?.title ? updateBook : addBook}>
      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={formData.title}
      />
      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={formData.description}
      />
      <input
        name="status"
        type="checkbox"
        onChange={handleChange}
        checked={formData.status}
      />
      <button>{book?.title ? "Update book" : "Add book"}</button>
    </form>
  );
}
