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

// const getOrderAmountDao = async (customerId) => {
//   const checkTotalAmount = await dataSource.query(
//     `
//     SELECT total_amount FROM orders WHERE payStatus = '1' AND customer_id = ?;`,
//     [customerId],
//   );
//   return checkTotalAmount;
// };

const walletUpdateDao = async (newCredit, customerId) => {
  const customer_wallet = await dataSource.query(
    `UPDATE customer_wallets SET credit = ? WHERE customer_id = ?`,
    [newCredit, customerId],
  );
  return customer_wallet;
};

// 오더상태 변경 Dao 아직 구현 못함
// const payStatusChangeDao = async (orderId) => {
//   const order_status = await dataSource.query(
//     `UPDATE orders SET payStatus = '2' WHERE id = ?`,
//     [orderId],
//   );
//   return orderstatus_change
// };

module.exports = {
  getWalletBalanceDao,
  walletUpdateDao,
  getOrderAmountDao,
};
