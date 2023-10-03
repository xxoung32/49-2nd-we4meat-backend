const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const reviewRouter = require('./reviewRouter');
const cartsRouter = require('./cartsRouter');

router.use('/users', userRouter);
router.use('/list', productRouter);
router.use('/review', reviewRouter);
router.use('/carts', cartsRouter);

module.exports = router;
