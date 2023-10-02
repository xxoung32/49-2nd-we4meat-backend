const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const orderRouter = require('./orderRouter');
// const reviewRouter = require('./reviewRouter');

router.use('/users', userRouter);
router.use('/order', orderRouter);
router.use('/list', productRouter);
// router.use('/review', reviewRouter);

module.exports = router;
