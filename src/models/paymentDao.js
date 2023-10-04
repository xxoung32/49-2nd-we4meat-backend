const { dataSource } = require('./dataSource');

const getWalletBalanceDao = async (customerId) => {
  const checkWalletBalance = await dataSource.query(
    `SELECT credit FROM customer_wallets WHERE customer_id =?`,
    [customerId],
  );
  return checkWalletBalance;
};

const getOrderAmountDao = async (customerId) => {
  const checkTotalAmount = await dataSource.query(
    `
    SELECT total_amount FROM orders WHERE customer_id = ?;`,
    [customerId],
  );
  return checkTotalAmount;
};

const walletUpdateDao = async (newCredit, customerId) => {
  const customer_wallet = await dataSource.query(
    `UPDATE customer_wallets SET credit = ? WHERE customer_id = ?`,
    [newCredit, customerId],
  );

  return customer_wallet;
};

// 오더상태 변경 Dao 아직 구현 못함
// const changeOrderStatus = async (orederStatus, customerId) => {
//   const order_status = await dataSource.query(
//     `UPDATE orders SET status = ? WHERE customer_id = ?`,
//     [orederStatus, customerId],
//   );
// };

module.exports = {
  getWalletBalanceDao,
  walletUpdateDao,
  getOrderAmountDao,
};
