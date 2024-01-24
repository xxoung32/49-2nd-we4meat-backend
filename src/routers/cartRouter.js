const express = require('express');
const { verifyToken } = require('../../middlewares');
const { cartController } = require('../controllers');
const {
  addItemController,
  getCartController,
  updateCartQuantityController,
  deleteItemController,
} = cartController;
const router = express.Router();

router.get('/', verifyToken, getCartController);
router.post('/', verifyToken, addItemController);
router.patch('/:cartId', verifyToken, updateCartQuantityController);
router.delete('/:cartId', verifyToken, deleteItemController);

module.exports = router;
