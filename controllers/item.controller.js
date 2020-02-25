const Item = require('../models/item.model');

exports.home = function(req, res) {
  res.send('Hello, world!');
};

// Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send('Greetings from the Test controller!');
};

exports.item_create = function(req, res, next) {
  const item = new Item({
    name: req.body.name,
    price: req.body.price,
  });

  item.save(err => {
    if (err) {
      return next(err);
    }
    res.send('Item Created successfully');
  });
};

exports.item_details = function(req, res, next) {
  Item.findById(req.params.id, (err, item) => {
    if (err) return next(err);
    res.send(item);
  });
};

exports.item_update = function(req, res, next) {
  Item.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, item) => {
    if (err) return next(err);
    res.send('Item udpated.');
  });
};

exports.item_delete = function(req, res, next) {
  Item.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.send('Deleted successfully!');
  });
};
