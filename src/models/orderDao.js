const { dataSource } = require('./dataSource');
//주문 상세 정보 불러오기
const getOrderDao = async (userId, orderId) => {
  await dataSource.query(
    `
        SELECT customers.id,
        customers.email,
        customers.name,
        customers.phonenumber,
        customers.address,
        customer_address.customer_id,
        orders.order_item_id 
        FROM customers
        LEFT JOIN customer_address ON 
        customers.id = customer_address.customer_id
        LEFT JOIN orders on customers.id = orders.customer_id
        WHERE customers.id = ${userId} & orders.id = ${orderId};
        `,
  );
};

//주문 목록 불러오기도 있어야 할것 같음.
const getOrderList = async (userId) => {
  await dataSource.query(
    `
    SELECT total_amount, created_at, payment_id, order_item_id,
    FROM orders 
    WHERE orders.customer_id = ${userId};
    `,
  );
};

//주문 배송지, 요청사항 입력
const postOrderAddressDao = async (address, text) => {
  await dataSource.query(
    `
        INSERT INTO customer_address
        (
        customer_id,
        address,
        text
        )
        VALUES
        (
        '${customer_id}',
        '${address}',
        '${text}'
        )`,
  );
};
//주소 추가
const customerAddressDao = async (address) => {
  await dataSource.query(
    `
        INSERT INTO customer
        (
        address
        )
        VALUES
        (
        '${address}'
        )`,
  );
};

module.exports = {
  getOrderDao,
  postOrderAddressDao,
  customerAddressDao,
};
