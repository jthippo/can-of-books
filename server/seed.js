const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/book");

// connect to database
mongoose.connect(process.env.DATABASE_URL);

// function to seed our database with entries
async function seed() {
  await Book.create([
    {
      title: "The Forever War",
      description:
        "1974 sci-fi story about an interstellar war that lasts millennia but, due to time dilation, is experienced by our protagonist from start to finish in a handful of years.",
      status: true,
    },
    {
      title: "Foundation",
      description:
        "Groundbreaking 1951 novel that introduced now-common sci-fi concepts, concerning the fall of galactic civilisation thousands of years in the future.",
      status: true,
    },
    {
      title: "Spot Goes to the Circus",
      description:
        "Visionary fiction from 1982 following the visit of a yellow puppy to a nearby circus, written and drawn by a single multi-talented creator",
      status: false,
    },
  ]);

  // disconnect from our database
  mongoose.disconnect();
}

// run function!
seed();

// run node seed in the server cli back in classroom
