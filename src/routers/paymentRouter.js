const express = require('express');
const { paymentController } = require('../controllers');
const {
  checkAmountController,
  walletRechargeController,
  walletDeductionController,
} = paymentController;
const { verifyToken } = require('../../middlewares');
const router = express.Router();

router.post('/', verifyToken, checkAmountController);
router.patch('/complete', verifyToken, walletDeductionController);
router.patch('/topupcredit', verifytoken, walletRechargeController);

module.exports = router;
