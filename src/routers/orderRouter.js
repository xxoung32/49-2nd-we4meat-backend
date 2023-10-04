const express = require('express');
const { verifyToken } = require('../../middlewares');
const { orderController } = require('../controllers');
const {
    createOrderController,
    getOrdersController,
    cancelOrdersController,
  } = orderController

const router = express.Router();

router.get('/', verifyToken, getOrdersController);
router.post('/', verifyToken, createOrderController);
router.post('/cancel', verifyToken, cancelOrdersController);

module.exports = router;
