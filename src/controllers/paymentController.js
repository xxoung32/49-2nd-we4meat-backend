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
    if (!walletCredit) {
      throwError(400, 'Wallet not found');
    } else if (walletCredit < orderAmount) {
      throwError(400, 'Insufficient balance');
    }
    return res
      .status(200)
      .json({ 'Reserve balance': walletCredit, 'Order Amount': orderAmount });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const walletDeductionController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const itemPayment = await walletDeductionService(id);
    return res.status(200).json({ message: 'Complete payment' });
    // 오더상태 변경
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
    if (!chargeAmount) {
      throwError(400, 'NOT FOUND');
    }
    if (!walletNewCredit) {
      throwError(400, 'Charging errors');
    }
    return res.status(200).json({ 'Total amount': walletNewCredit });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  checkAmountController,
  walletDeductionController,
  walletRechargeController,
};
