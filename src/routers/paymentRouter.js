const express = require('express');
const router = express.Router();

const { paymentController } = require('../controllers');
console.log('페이먼트', paymentController);
const {
  checkAmountController,
  walletRechargeController,
  walletDeductionController,
} = paymentController;
console.log('페이먼트', paymentController);
const { verifyToken } = require('../../middlewares');

router.post('/', verifyToken, checkAmountController);
router.patch('/paymentcomplete', verifyToken, walletDeductionController);
router.patch('/topupcredit', verifyToken, walletRechargeController);

module.exports = router;
