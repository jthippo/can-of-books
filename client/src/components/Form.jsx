import axios from "axios";
import { useState } from "react";

// passing books and setBooks as props from App.jsx i think?
// formData state is blank(ish) object
export default function Form({ books, setBooks }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: false,
  });

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
  // don't understand the setBooks line with the spread operator
  async function handleSubmit(event) {
    event.preventDefault();
    const API = "http://localhost:8080/books";
    console.log(formData);
    const res = await axios.post(API, formData);
    console.log(res);
    setBooks([...books, res.data]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
      <input name="status" type="checkbox" onChange={handleChange} />
      <button>Add book</button>
    </form>
  );
}
