const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
<<<<<<< HEAD
const orderRouter = require('./orderRouter');
=======
const productRouter = require('./productRouter');
// const reviewRouter = require('./reviewRouter');

router.use('/users', userRouter);
router.use('/list', productRouter);
// router.use('/review', reviewRouter);
>>>>>>> f7c738b7b9379632fd96a75e3d728501d67caf67

router.use('/user', userRouter);
router.use('/order', orderRouter);
const { verifyToken } = require('../../middlewares');

module.exports = router;
