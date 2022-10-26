const path = require("path");
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 3003;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  setTimeout(() => {
    res.json({
      message: `${Math.floor(Math.random() * 100)}`,
    });
  }, 800);
});

const dbUrl = process.env.MONGO_URL;
const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const connectionOptions = "?retryWrites=true&w=majority";
const uri = `mongodb+srv://${user}:${password}@${dbUrl}/${connectionOptions}`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish connection
    const collection = await client.db(process.env.DB_NAME).collection("cycles");
    console.log(`document count: ${await collection.countDocuments()}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
