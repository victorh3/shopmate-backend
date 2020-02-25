const express = require('express');

const router = express.Router();

const itemController = require('../controllers/item.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', itemController.home);
router.get('/test', itemController.test);
router.post('/create', itemController.item_create);
router.get('/:id', itemController.item_details);
router.put('/:id/update', itemController.item_update);
router.delete('/:id/delete', itemController.item_delete);

module.exports = router;
