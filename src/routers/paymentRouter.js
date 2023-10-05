const express = require('express');
const router = express.Router();
const { paymentController } = require('../controllers');

const {
  checkAmountController,
  walletRechargeController,
  walletDeductionController,
} = paymentController;

const { verifyToken } = require('../../middlewares');

router.post('/', verifyToken, checkAmountController);
router.patch('/complete', verifyToken, walletDeductionController);
router.patch('/topupcredit', verifyToken, walletRechargeController);

module.exports = router;


