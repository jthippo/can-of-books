const mongoose = require("mongoose");
require("dotenv").config();
const Movie = require("./models/movie");

// connect to database
mongoose.connect(process.env.DATABASE_URL);

// function to seed our database with entries
async function seed() {
  await Movie.create([
    {
      title: "The Forever War",
      description:
        "1974 sci-fi story about an interstellar war that lasts millennia but, due to time dilation, is experienced by our protagonist from start to finish in a handful of years.",
      status: "I don't know what this field is for.",
    },
    {
      title: "Foundation",
      description:
        "Groundbreaking 1951 novel that introduced now-common sci-fi concepts, concerning the fall of galactic civilisation thousands of years in the future.",
      status: "I still don't know what this field is for.",
    },
    {
      title: "Spot Goes to the Circus",
      description:
        "Visionary fiction from 1982 following the visit of a yellow puppy to a nearby circus, written and drawn by the same multi-talented creator",
      status: "Does anyone know what this field is for?",
    },
  ]);

  // check it's worked and disconnect from our database
  console.log("Movie created");
  mongoose.disconnect();
}

// run function!
seed();
