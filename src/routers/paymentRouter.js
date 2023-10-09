const express = require('express');
const { verifyToken } = require('../../middlewares');
const { paymentController } = require('../controllers')
const {
  getTotalAmountController,
  getAmountController,
  checkAmountController,
  walletRechargeController,
  walletDeductionController,
} = paymentController;

const router = express.Router();

router.get('/', verifyToken, getTotalAmountController);
router.post('/', verifyToken, getAmountController);
router.post('/', verifyToken, checkAmountController);
router.patch('/complete', verifyToken, walletDeductionController);
router.patch('/topupcredit', verifyToken, walletRechargeController);

module.exports = router;


