//queries.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("library");
    const books = database.collection("books");

    // Find books by genre
    const fictionBooks = await books.find({ genre: "Fiction" }).toArray();
    console.log("Fiction Books:", fictionBooks);

    // Find books after year 2000
    const modernBooks = await books.find({ year: { $gt: 2000 } }).toArray();
    console.log("Books published after 2000:", modernBooks);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
