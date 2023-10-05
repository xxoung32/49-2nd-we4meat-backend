const { throwError } = require('../../utils');
const { paymentService } = require('../services');
const {
  walletRechargeService,
  walletDeductionService,
  getOrderlistService,
  getWalletBalanceService,
} = paymentService;

// 1. 쿼리스트링에 있는 오더 넘버를 확인하여 쿼리문으로  오더 정보 가져오기..
// 2. 오더 주문 가져온 후 user_id와 토큰값 확인하여 사용자가 맞는지 확인
const checkAmountController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const orderAmount = await getOrderlistService(id);
    const walletCredit = await getWalletBalanceService(id);
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
    const { id } = req.user;
    const itemPayment = await walletDeductionService(id);
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
  checkAmountController,
  walletDeductionController,
  walletRechargeController,
};
