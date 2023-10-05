const { dataSource } = require('./dataSource');

//주문 배송지, 요청사항 입력
const postOrderAddressDao = async (address, text) => {
  await dataSource.query(
    `
          INSERT INTO customers_address
          (
          customers_id,
          address,
          text
          )
          VALUES
          (
          '${customers_id}',
          '${address}',
          '${text}'
          )`,
  );
};
//주소 추가
const customerAddressDao = async (address) => {
  await dataSource.query(
    `
          INSERT INTO customers
          (
          address
          )
          VALUES
          (
          '${address}'
          )`,
  );
};

//주소불러오기
const getAddressDao = async (userId) => {
  await dataSource.query(
    `
  SELECT
  address
  FROM customers
  WHERE id=?
  `,
    [userId],
  );
};
module.exports = {
  postOrderAddressDao,
  customerAddressDao,
  getAddressDao,
};
