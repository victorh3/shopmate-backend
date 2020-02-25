const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
  brand_name: { type: String },
  location: { type: String },
  name: { type: String, required: true, max: 100 },
  notes: { type: String },
  gtin14: { type: String },
  size: { type: String },
  on_sale: { type: Boolean },
  price: { type: Number, required: true },
});

// Export the model
module.exports = mongoose.model('Item', ItemSchema);
