const express = require('express');
const router = express.Router();

const orderRouter = require('./orderRouter');
// const addressRouter = require('./addressRouter');

router.use('/order', orderRouter);
// router.use('/address', addressRouter);

module.exports = router;
