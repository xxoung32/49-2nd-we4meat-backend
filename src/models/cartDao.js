const { dataSource } = require('./dataSource');

// 장바구니 아이템 (제품) 추가 - 완
const updateItemDao = async (customerId, productId, quantity) => {
  return await dataSource.query(
    `
    INSERT
    INTO carts (customer_id, product_id, quantity)
    VALUES (?, ? ,?)
    `,
    [customerId, productId, quantity],
  );
};

// 장바구니 조회 - 완
const getCartDao = async (customerId) => {
  const status = 1;
  return await dataSource.query(
    `
    SELECT c.id AS customerId,
      p.product_name AS productName,
      p.product_img AS productImg,
      p.weight,
      cart.quantity,
      p.price AS unitPrice,
      (cart.quantity * p.price) AS totalPrice
    FROM customers AS c
    JOIN carts AS cart ON c.id = cart.customer_id
    JOIN products AS p ON cart.product_id = p.id
    WHERE cart.status = ? AND c.id = ? `,
    [status, customerId],
  );
};

// 장바구니 전제 삭제 - 완
const purgeCartDao = async (customerId) => {
  return await dataSource.query(
    `
    DELETE
    FROM carts
    WHERE customer_id = ?
    `,
    [customerId],
  );
};

module.exports = {
  updateItemDao,
  getCartDao,
  purgeCartDao,
};
