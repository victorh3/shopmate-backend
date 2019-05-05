// https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2
const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/db");

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true })); // To handle boy post of urlencoded
app.use(bodyParser.json()); // To handle boy post of json
app.use(cors());

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  // Make sure you add the database name and not the collection name
  const databaser = database.db("shopmate-db");
  require("./app/routes")(app, databaser);
  app.listen(port, () => {
    console.log(`We are live on ${port}`);
  });
});

// require("./app/routes")(app, {});

// app.listen(port, () => {
//   console.log(`We are live on ${port}`);
// });
