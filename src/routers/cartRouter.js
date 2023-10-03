const express = require('express');
const { verifyToken } = require('../../middlewares');
const { cartController } = require('../controllers');
const {
  addItemController,
  getCartController,
  updateCartController,
  // deleteCartByIdController,
} = cartController;
const router = express.Router();

router.get('/', verifyToken, getCartController);
router.post('/', verifyToken, addItemController);
router.patch('/', verifyToken, updateCartController);
// router.patch('/delete',verifyToken, deleteCartByIdController);

module.exports = router;
