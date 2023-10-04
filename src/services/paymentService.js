const { paymentDao } = require('../models');
const { getWalletBalanceDao, walletUpdateDao, getOrderAmountDao } = paymentDao;
const { paymentController } = require('../controllers');

// 주문금액 불러오기
const getOrderlistService = async (customerId) => {
  return await getOrderAmountDao(customerId);
};

//  적립금 불러오기
const getWalletBalanceService = async (customerId) => {
  return await getWalletBalanceDao(customerId);
};

// 충전

const walletRechargeService = async (chargeAmount, customerId) => {
  const currentCredit = await getWalletBalanceDao(customerId);
  const chargeCredit = await chargeAmount;
  console.log('currentCredit', currentCredit);
  const newCredit = currentCredit + chargeCredit;
  return walletUpdateDao(newCredit, customerId);
};

//  차감

const walletDeductionService = async (credit, customerId) => {
  const currentCredit = await getWalletBalanceDao(customerId);
  const orderAmount = await getOrderAmountDao(customerId);
  const newCredit = currentCredit - orderAmount;
  console.log(currentCredit);
  console.log(orderAmount);
  return walletUpdateDao(newCredit, customerId);
};

//오더상태 변경<=== 이거 못함

module.exports = {
  walletRechargeService,
  walletDeductionService,
  getOrderlistService,
  getWalletBalanceService,
};
