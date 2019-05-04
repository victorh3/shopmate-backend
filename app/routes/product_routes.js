const { ObjectID } = require("mongodb");

module.exports = function(app, db) {
  app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const details = { _id: new ObjectID(id) };
    db.collection("products").findOne(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(item);
      }
    });
  });

  app.get("/products/", (req, res) => {
    db.collection("products")
      .find({})
      .toArray((err, item) => {
        if (err) {
          res.send({ error: "An error has occurred" });
        } else {
          res.send(item);
        }
      });
  });

  app.post("/products", (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection("products").insert(note, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    const details = { _id: new ObjectID(id) };
    db.collection("products").remove(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(`Note ${id} deleted!`);
      }
    });
  });

  app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const details = { _id: new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection("products").update(details, note, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(note);
      }
    });
  });
};
