const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const orderRouter = require('./orderRouter');
const addressRouter = require('./addressRouter');
const paymentRouter = require('./paymentRouter');
const reviewRouter = require('./reviewRouter');
const cartRouter = require('./cartRouter');

router.use('/users', userRouter);
router.use('/order', orderRouter);
router.use('/list', productRouter);
router.use('/payment', paymentRouter);
router.use('/review', reviewRouter);
router.use('/cart', cartRouter);
router.use('/address', addressRouter);

module.exports = router;