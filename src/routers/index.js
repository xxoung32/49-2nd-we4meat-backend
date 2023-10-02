const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const orderRouter = require('./orderRouter');

router.use('/user', userRouter);
router.use('/order', orderRouter);
const { verifyToken } = require('../../middlewares');

module.exports = router;
