const { dataSource } = require('./dataSource');
const { orderStatusEnum } = require('./eums');
//주문 상세 정보 불러오기
const getOrdersDao = async (userId, orderId) => {
  return await dataSource.query(
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
        WHERE customers.id = ? && orders.id = ?;
        `,
    [userId, orderId],
  );
};

//주문 목록 불러오기도 있어야 할것 같음.
const getOrderListDao = async (userId) => {
  return await dataSource.query(
    `
    SELECT total_amount, created_at, payment_id, order_item_id,
    FROM orders 
    WHERE orders.customers_id = ${userId};
    `,
  );
};

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
//카트정보 불러오기
const customerCartDao = async (userId) => {
  return await dataSource.query(
    `
      SELECT
      product_id,
      quantity
      FROM carts
      WHERE customer_id =?;`,
    [userId],
  );
};

const MoveCartToOrderDao = async (userId, totalPrice, customers_Carts) => {
  const queryRunner = dataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    await queryRunner.query(
      `
          UPDATE customers_wallet 
          SET
              credit=credit-?
          WHERE id=?;`,
      [totalPrice, userId],
    );

    for (
      var baseNumber = 0;
      baseNumber < customers_Carts.length;
      baseNumber++
    ) {
      await queryRunner.query(
        `
              INSERT INTO orders(
                  customers_id,
                  products_id,
                  quantity,
                  order_status_id
              ) VALUES (?,?,?,?);`,
        [
          userId,
          customers_Carts[baseNumber].product_option_id,
          customers_Carts[baseNumber].quantity,
          orderStatusEnum.ADDED,
        ],
      );
    }

    const deleteCarts = await queryRunner.query(
      `
          DELETE
          FROM carts
          WHERE customers_id=?;`,
      [userId],
    );
    await queryRunner.commitTransaction();
    return deleteCarts;
  } catch (err) {
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};

//주문 상세확인
const checkOrderStatusDao = async (orderId) => {
  const orderStatus = await dataSource.query(
    `
      SELECT
      order_status_id AS osi
      FROM orders
      WHERE id=?`,
    [orderId],
  );
  console.log(orderStatus);
  return orderStatus[0].osi;
};

const checkCreditDao = async (userId, userWalletId) => {
  return await dataSource.query(
    `
      SELECT
      customers.id,
      customer_wallets.customer_id,
      customer_wallets.credit,
      customer_wallets.id
      FROM customer_wallets LEFT JOIN customers ON customers.id = customer_wallets.customer_id
      WHERE customers.id = ? && customer_wallets.customer_id =?`,
    [userId, userWalletId],
  );
};

const cancelOrdersDao = async (userId, orderId, totalPrice) => {
  const queryRunner = dataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    await queryRunner.query(
      `
          UPDATE customer_wallets
          SET
              point=point+?
          WHERE id=?;`,
      [totalPrice, userId],
    );

    const cancelOrders = await queryRunner.query(
      `
          UPDATE orders
          SET
              order_status_id=?
          WHERE id=?;`,
      [orderStatusEnum.CANCELED, orderId],
    );
    await queryRunner.commitTransaction();
    return cancelOrders;
  } catch (err) {
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};

module.exports = {
  getOrdersDao,
  postOrderAddressDao,
  customerAddressDao,
  getOrderListDao,
  customerCartDao,
  checkOrderStatusDao,
  checkCreditDao,
  MoveCartToOrderDao,
  cancelOrdersDao,
};
