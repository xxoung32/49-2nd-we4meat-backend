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
  const newCredit = currentCredit[0].credit + chargeCredit;
  const chargewallet = await walletUpdateDao(newCredit, customerId);
  return await getWalletBalanceDao(customerId);
};

//  차감

//오더상태 변경<=== 이거 못함
// const payStatusChangeService = async (orderId) =>{
//   return await payStatusChangeDao(orderId);
// }

const walletDeductionService = async (customerId) => {
  const currentCredit = await getWalletBalanceDao(customerId);
  const orderAmount = await getOrderAmountDao(customerId);
  const newCredit = currentCredit[0].credit - orderAmount[0].total_amount;
  // await payStatusChangeService(orderId);
  return walletUpdateDao(newCredit, customerId);
};

module.exports = {
  walletRechargeService,
  walletDeductionService,
  getOrderlistService,
  getWalletBalanceService,
};
