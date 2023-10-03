const express = require('express');
const { verifyToken } = require('../middlewares');
const { paymentController } = require('../controllers');
const {
  checkAmountController,
  walletRechargeController,
  walletDeductionController,
  getOrderlistController,
} = paymentController;
const router = express.Router();

router.post('/', verifyToken, checkAmountController, getOrderlistController);
router.patch('/complete', verifyToken, walletDeductionController);
router.patch('/topupcredit', verifytoken, walletRechargeController);

module.exports = router;
