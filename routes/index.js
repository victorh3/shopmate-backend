const itemRoutes = require('./item.route');

module.exports = function(app, db) {
  itemRoutes(app, db);
  // Other route groups could go here, in the future
};
