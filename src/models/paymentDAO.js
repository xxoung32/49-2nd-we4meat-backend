const { dataSource } = require('./dataSource');

// getListController,
// getListWalletController,
// checkAmountController,
// changeAmountController,
// purchaseCompleteController,
// creatwalletController,

// order 테이블에서 id와 금액,제품,수량에 대한 정보받기 get /oreder/getlist=id
const getWalletBalanceDao = async (customerId) => {
  const checkWalletBalance = await dataSource.query(
    `
  SELECT credit FROM customer_wallets WHERE customer_id =?`,
    [customerId],
  );
  return checkWalletBalance;
};

const getOrderlistDao = async (totalAmount, customerId) => {
  const checkTotalAmount = await dataSource.query(
    `
    SELECT * FROM orders WHERE customer_id = ?;
    SELECT * FROM customer_wallets
    INNER JOIN customers ON customer_wallets.customer_id = customers.id
    WHERE customer_id = ?;
    `,
    [totalAmount, customerId],
  );
  return checkTotalAmount;
};

// );
const walletUpdateDao = async (newCredit, customerId) => {
  const customer_wallet = await dataSource.query(
    `INSERT amount = ? INTO customer_wallets WHERE customer_id = ?`,
    [newCredit, customerId],
  );

  return customer_wallet;
};

module.exports = {
  getWalletBalanceDao,
  walletUpdateDao,
  getOrderlistDao,
};
