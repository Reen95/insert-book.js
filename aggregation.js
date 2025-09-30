//aggregation.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("library");
    const books = database.collection("books");

    // Group books by genre and count them
    const agg = await books.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } }
    ]).toArray();

    console.log("Books grouped by genre:", agg);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
