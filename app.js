const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const db = require("./config/db");

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

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
