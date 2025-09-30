//indexing.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("library");
    const books = database.collection("books");

    // Create an index on "author"
    await books.createIndex({ author: 1 });
    console.log("Index created on author field");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
