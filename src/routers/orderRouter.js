const express = require('express');
const { verifyToken } = require('../../middlewares');
const { orderController } = require('../controllers');
const {
    createOrderController,
    getOrderListController,
    getOrderDetailController,
    cancelOrdersController,
  } = orderController

const router = express.Router();

router.post('/', verifyToken, createOrderController);
router.get('/', verifyToken, getOrderListController);
router.get('/detail', verifyToken,getOrderDetailController);
router.post('/cancel', verifyToken, cancelOrdersController);

module.exports = router;
