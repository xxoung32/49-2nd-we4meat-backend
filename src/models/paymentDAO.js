const { dataSource } = require('./dataSource');

// getListController,
// getListWalletController,
// checkAmountController,
// changeAmountController,
// purchaseCompleteController,
// creatwalletController,

// order 테이블에서 id와 금액,제품,수량에 대한 정보받기 get /oreder/getlist=id
const getListDAO = async (order_id, total_amount) => {
  try {
    return await dataSource.query(
        `SELECT order_id, total_amount FROM order;
        `;
      [order_id, total_amount],
      );
  } catch (err) {
    const error = new Error('list get Failed');
    error.statusCode = 500;
    throw error;
  }
};


// wallet 테이블에서 id를 체크 get /oreder/getlist=id/wallet=id
const getListWalletDAO = async () => {};

// order와 wallet의 금액 차이를 확인하여  get  oreder/getlist=id/wallet=id/amount
const checkAmountDAO = async () => {};

// order의 총금액만큼 wallet의 금액을 차감 patch oreder/getlist=id/wallet=id/amount
const changeAmountDAO = async () => {};

// payment column을 새로 생성 post /purchasecomplete/payment=id
const purchaseCompleteDAO = async () => {};

//  지갑 token 을 생성하여 토큰  테이블을 생성 post /creatwallet

const creatWalletDAO = async (user_id, credit) => {
  try {
    return await dataSource.query(
        `INSERT INTO user_wallet (user_id, credit) VALUES (?,?);
        `;
      [user_id, credit],
      );
  } catch (err) {
    const error = new Error('wallet Update Failed');
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  creatWalletDAO,
};
