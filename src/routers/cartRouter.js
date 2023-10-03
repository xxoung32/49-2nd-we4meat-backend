const express = require('express');
const { verifyToken } = require('../../middlewares');
const { cartController } = require('../controllers');
const {
  addItemController,
  getCartController,
  insertCartsController,
  deleteCartByIdController,
} = cartController;
const router = express.Router();

router.get('/', verifyToken, getCartController);
router.post('/', verifyToken, addItemController);
router.post('/create', verifyToken, insertCartsController);
router.patch('/delete',verifyToken, deleteCartByIdController);

module.exports = router;
