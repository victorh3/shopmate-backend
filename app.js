const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const item = require('./routes/item.route');

const mongoConfig = require('./config/db');

const app = express();
const port = 8000;

const mongoDB = process.env.MONGODB_URI || mongoConfig.url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/items', item);

app.listen(port, () => {
  console.log(`Server is up and running on port number ${port}`);
});
