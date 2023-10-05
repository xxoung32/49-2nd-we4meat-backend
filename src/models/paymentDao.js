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
    SELECT total_amount FROM orders WHERE pay_Status = '1' AND customer_id = ?;`,
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

const payStatusChangeDao = async (orderId) => {
  const orderstatus_change = await dataSource.query(
    `UPDATE orders SET pay_Status = '2' WHERE id = ?`,
    [orderId],
  );
  return orderstatus_change;
};

module.exports = {
  getWalletBalanceDao,
  walletUpdateDao,
  getOrderAmountDao,
  payStatusChangeDao,
};
