//crud_operations.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("library");
    const books = database.collection("books");

    // CREATE
    await books.insertOne({ title: "Deep Work", author: "Cal Newport", year: 2016, genre: "Self-help" });

    // READ
    const allBooks = await books.find().toArray();
    console.log("All books:", allBooks);

    // UPDATE
    await books.updateOne(
      { title: "The Alchemist" },
      { $set: { year: 1993 } }
    );

    // DELETE
    await books.deleteOne({ title: "Clean Code" });

    console.log("CRUD operations completed.");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
