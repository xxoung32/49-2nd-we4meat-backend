const express = require('express');
const { verifyToken } = require('../../middlewares');
const { orderController } = require('../controllers');
const router = express.Router();

router.get('/', verifyToken, orderController.getOrdersController);
router.post('/pay', verifyToken, orderController.addToOrdersController);
router.post('/delete', verifyToken, orderController.cancelOrdersController);

module.exports = router;
