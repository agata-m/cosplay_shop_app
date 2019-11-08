const express = require('express');
const router = express.Router();

const ItemController = require('../controllers/item.controller');

//get all items
router.route('/items').get(ItemController.getItems);

//get single item
router.route('/items/:id').get(ItemController.getSingleItem);

//get items by range 
router.route('/items/range/:startAt/:limit').get(ItemController.getItemsByRange);

module.exports = router;