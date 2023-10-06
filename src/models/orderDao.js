const { dataSource } = require('./dataSource');
const { orderStatusEnum } = require('./enums');

//카트정보 불러오기 - 구현완, 사용중
const customerCartDao = async (userId) => {
  const status = 1;
  return await dataSource.query(
    `
      SELECT
      product_id AS productId,
      quantity
      FROM carts
      WHERE customer_id =? & status = ?;`,
    [userId, status],
  );
};

// 장바구니에 있는 제품들 오더/오더_아이템 테이블로 이동 - 구현완, 사용중
const MoveCartToOrderDao = async (userId, totalPrice) => {
  const queryRunner = dataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    // 고객 장바구니 불러오기
    const customerCart = await dataSource.query(
    `
    SELECT * FROM carts WHERE customer_id = ? & status = 1;
    `,
      [userId],
    );

    // Orders Table : Init & Total Price 에 값 넣어 주기
    await dataSource.query(
      `
      INSERT INTO orders (total_amount, customer_id)
      VALUES (?, ?)
      `,
      [totalPrice, userId],
    );

    const orderId = await dataSource.query(
      `
      SELECT id AS orderId FROM orders WHERE customer_id = ?
      `, [userId]
    );

    // 불러온 장바구니 아이템을 orders 테이블에 넣어 주는 반복문
    for (var baseNumber = 0; baseNumber < customerCart.length; baseNumber++) {
      await queryRunner.query(
        `
              INSERT INTO order_items (
                order_id,
                customer_id,
                product_id,
                quantity
              ) VALUES (?, ?, ?, ?);`,
        [
          orderId[0].orderId,
          userId,
          customerCart[baseNumber].product_id,
          customerCart[baseNumber].quantity,
          // orderStatusEnum.ADDED,
        ],
        
      );
    }



    // Soft Delete
    const deleteCarts = await queryRunner.query(
      `
      UPDATE carts
      SET status = 2
      WHERE customer_id = ? & status = 1;
      `,
      [userId],
    );
    await queryRunner.commitTransaction();
    return deleteCarts, orderId;
  } catch (err) {
    console.error(err);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};

//주문 상태
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

  if (orderStatus.length > 0) {
    return orderStatus[1].osi;
  }
};

//주문 목록 불러오기도 있어야 할것 같음.

// id
const getOrderListDao = async (userId) => {
  return await dataSource.query(
    `
    SELECT
      o.id AS orderId,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'productId', p.id,
          'productName', p.product_name,
          'quantity', oi.quantity,
          'price', p.price,
          'totalPrice', (oi.quantity * p.price)
        )
      ) AS orderItems,
      o.created_at AS orderDate
    FROM orders o
    JOIN order_items oi ON oi.order_id = o.id
    JOIN products p ON oi.product_id = p.id
    JOIN carts ON carts.product_id = p.id
    WHERE o.customer_id = ? AND carts.status = 1
    GROUP BY oi.order_id
    `,
    [userId],
  );
};

// 주문 : 상세 정보 불러오기
const getOrderDetailDao = async (userId, orderId) => {
  return await dataSource.query(
    `
      SELECT
        c.email AS userEmail,
        c.name AS name,
        c.phonenumber AS PhoneNumber,
        c.address AS address,
        o.id AS orderId,
        o.requested_date AS requestDate,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'productId', p.id,
            'productName', p.product_name,
            'quantity', oi.quantity,
            'price', p.price,
            'totalPrice', (oi.quantity * p.price)
          )
        ) AS orderItems
      FROM orders o
      JOIN customers c ON o.customer_id = c.id
      JOIN order_items oi ON oi.order_id = o.id
      JOIN products p ON p.id = oi.product_id
      WHERE
        c.id = ? AND o.id = ?
      GROUP BY
        oi.order_id
    `,
    [userId, orderId],
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
              credit=credit+?
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
  customerCartDao,
  MoveCartToOrderDao,
  getOrderListDao,
  getOrderDetailDao,
  checkOrderStatusDao,
  cancelOrdersDao,
};
