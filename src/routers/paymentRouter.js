const express = require('express');
const { verifyToken } = require('../middlewares');
const { paymentController } = require('../controllers');
const {
  getListController,
  getListWalletController,
  checkAmountController,
  changeAmountController,
  purchaseCompleteController,
  creatwalletController,
} = paymentController;
const router = express.Router();

router.get('/oreder/getlist=id', verifyToken, getListController);
router.get(
  '/oreder/getlist=id/wallet=id',
  verifyToken,
  getListWalletController,
);
router.get(
  '/oreder/getlist=id/wallet=id/amount',
  verifyToken,
  checkAmountController,
);
router.patch(
  '/oreder/getlist=id/wallet=id/amount',
  verifyToken,
  changeAmountController,
);
router.post(
  '/purchasecomplete/payment=id',
  verifyToken,
  purchaseCompleteController,
);
router.post('/creatwallet', verifyToken, creatwalletController);

module.exports = router;
