const { paymentDao } = require('../models');
const {
  getWalletBalanceDao,
  walletUpdateDao,
  getOrderAmountDao,
  payStatusChangeDao,
} = paymentDao;
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
  const chargeCredit = Number(await chargeAmount); // 추후 로직 수정 필요
  const newCredit = Number(currentCredit[0].credit + chargeCredit); // 기본 로직 수적
  await walletUpdateDao(newCredit, customerId);
  return await getWalletBalanceDao(customerId);
};

//  차감

const walletDeductionService = async (customerId) => {
  const currentCredit = await getWalletBalanceDao(customerId);
  const orderAmount = await getOrderAmountDao(customerId);
  const newCredit = currentCredit[0].credit - orderAmount[0].total_amount;
  await walletUpdateDao(newCredit, customerId);
  await getWalletBalanceDao(customerId);
  // const payStatusChange = await payStatusChangeDao(orderId);
  return await getWalletBalanceDao(customerId);
};

module.exports = {
  walletRechargeService,
  walletDeductionService,
  getOrderlistService,
  getWalletBalanceService,
};
