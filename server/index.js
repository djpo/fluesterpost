const path = require("path");
const express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
const { MongoClient, ServerApiVersion } = require("mongodb");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 3003;

// create schema
const schema = buildSchema(`
  type CycleStep {
    lang: String!
    text: String!
  }
  type Cycle {
    _id: ID!
    originLang: String!
    originText: String!
    steps: [CycleStep!]!
  }
  type Query {
    getCycles(last: Int): [Cycle!]!
  }
`);

// query resolver functions
const root = {
  getCycles: ({ last }) => {
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
        await client.connect();

        const collection = await client.db(process.env.DB_NAME).collection("cycles");

        // TODO: limit results to int `last`
        const myCycles = await collection.find().toArray();
        return myCycles;
      } finally {
        await client.close();
      }
    }
    return run().catch(console.dir);
  },
};

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
