const { paymentDAO } = require('../models/paymentDAO');
const { getWalletBalanceDao, walletUpdateDao, getOrderlistDao } = paymentDAO;
const { paymentController } = require('../controllers/paymentController');
const { chargeAmount } = paymentController;

// 주문금액 불러오기
const getOrderlistService = async (totalAmount, customerId) => {
  return getOrderlistDao(totalAmount, customerId);
};

//  적립금 불러오기
const getWalletBalanceService = async (customerId) => {
  return getWalletBalanceDao(customerId);
};

// 충전

const walletRechargeService = async (chargeAmount, customerId) => {
  const currentCredit = await getWalletBalanceDao(credit, customerId);
  const chargeCredit = chargeAmount;
  const newCredit = currentCredit + chargeCredit;
  return walletUpdateDao(newCredit, customerId);
};

//  차감

const walletDeductionService = async (credit, customerId) => {
  const currentCredit = await getWalletBalanceDao(credit, customerId);
  const orderAmount = await getOrderlistDao(totalAmount, customerId);
  const newCredit = currentCredit - orderAmount;
  return walletUpdateDao(newCredit, customerId);
};

module.exports = {
  walletRechargeService,
  walletDeductionService,
  getOrderlistService,
  getWalletBalanceService,
};
