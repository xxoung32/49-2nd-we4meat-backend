const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const paymentRouter = require('./paymentRouter');
// const reviewRouter = require('./reviewRouter');

router.use('/users', userRouter);
router.use('/list', productRouter);
router.use('/payment', paymentRouter);
router.use('/payment/complete', paymentCompeleteRouter);
router.use('/topupcredit', walletRechargeRouter);
// router.use('/review', reviewRouter);

module.exports = router;
