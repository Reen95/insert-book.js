//insert_books.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017"; // Change if using MongoDB Atlas
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("library");
    const books = database.collection("books");

    const sampleBooks = [
      { title: "Atomic Habits", author: "James Clear", year: 2018, genre: "Self-help" },
      { title: "The Alchemist", author: "Paulo Coelho", year: 1988, genre: "Fiction" },
      { title: "Clean Code", author: "Robert C. Martin", year: 2008, genre: "Programming" },
      { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999, genre: "Programming" },
    ];

    const result = await books.insertMany(sampleBooks);
    console.log(`${result.insertedCount} books inserted`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
