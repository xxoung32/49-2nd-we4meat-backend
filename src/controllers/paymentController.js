const { throwError } = require('../../utils');
const { paymentService } = require('../services');
const {
  walletRechargeService,
  walletDeductionService,
  getOrderlistService,
  getWalletBalanceService,
} = paymentService;

const getAmountController = async (req, res,next) => {
    const userId = req.user.id;
    return await getWalletBalanceService(userId);
};

const checkAmountController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const orderAmount = await getOrderlistService(userId);
    const walletCredit = await getWalletBalanceService(userId);
    if (!walletCredit[0].credit) {
      throwError(400, 'NOT_FOUND_WALLET');
    } else if (walletCredit[0].credit < orderAmount[0].total_amount) {
      throwError(400, 'INSUFFICIENT_BALANCE');
    }
    return res.status(200).json({
      message: 'Payments available',
      'Reserve_balance': walletCredit[0].credit,
      'Order_Amount': orderAmount[0].total_amount,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const walletDeductionController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { orderId } = req.body
    const itemPayment = await walletDeductionService(userId, orderId);
    return res.status(200).json({
      message: 'paymentComplete',
      'total_Credit': itemPayment[0].credit,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const walletRechargeController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const chargeAmount = req.body.credit;
    const walletNewCredit = await walletRechargeService(chargeAmount, id);
    if (!chargeAmount) throwError(400, 'NO_AMOUNT');
    if (!walletNewCredit) throwError(400, 'INTERNAL_ERROR');
    return res.status(200).json({
      message: 'WALLET_CHARGED',
      data: walletNewCredit[0].credit,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// 오더상태 변경

module.exports = {
  getAmountController,
  checkAmountController,
  walletDeductionController,
  walletRechargeController,
};
