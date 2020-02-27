const Item = require('../models/item.model');

exports.hello = function(req, res) {
  res.send('Hello, world!');
};

// Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send('Greetings from the Test controller!');
};

exports.get_items = function(req, res) {
  Item.find({}, (err, items) => {
    const data = [];

    items.forEach(item => {
      data.push(item);
    });

    res.send(data);
  });
};

exports.item_create = function(req, res, next) {
  const {
    name,
    price,
    brand_name,
    location,
    notes,
    gtin14,
    size,
    on_sale,
  } = req.body;
  const item = new Item({
    name,
    price,
    brand_name,
    location,
    notes,
    gtin14,
    size,
    on_sale: on_sale || false,
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
  Item.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
    if (err) return next(err);
    res.send('Item updated.');
  });
};

exports.item_delete = function(req, res, next) {
  Item.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.send('Deleted successfully!');
  });
};
