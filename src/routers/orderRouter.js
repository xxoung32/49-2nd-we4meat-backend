const express = require('express');
const { verifyToken } = require('../../middleware');

const { orderController } = require('../controllers');
const { createOrderController } = orderController;

const router = express.Router();

router.get('/', verifyToken, createOrderController);
// // router.post('/list', verifyToken);
// // router.post('/message', verifyToken);
// // router.patch('/delete', verifyToken);

module.exports = router;
