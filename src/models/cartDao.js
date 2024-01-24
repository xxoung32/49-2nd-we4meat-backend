const { dataSource } = require('./dataSource');

// 장바구니 아이템 (제품) 추가 - 완
const addItemDao = async (customerId, productId, quantity) => {
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
    SELECT p.id AS productId,
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


//개별 아이템 추가할 때 기존 아이템 있는 지 확인 있으면 수량 추가
const existingItemCheckDao = async (customerId, productId) => {
  // 기존 장바구니 있는 지 확인
  const status = 1;
  return await dataSource.query(
    `
    SELECT id
    FROM carts
    WHERE customer_id = ? AND product_id = ? AND status = ?
    `,
    [customerId, productId, status],
  );
};

// 같은 상품이 있는 경우 수량 추가
const addQuantityDao = async (customerId, cartId, quantity) => {
  return await dataSource.query(
    `
      UPDATE carts
      SET quantity = quantity + ?
      WHERE id = ? AND customer_id = ?
    `,
    [quantity, cartId, customerId],
  );
};

//장바구니 내에서 수량 변경
const updateCartQuantityDao = async (customerId, cartId, quantity) => {
  return await dataSource.query(`
  UPDATE carts
  SET quantity = ?
  WHERE id =? AND customer_id = ?
  `,
    [quantity, cartId, customerId]);

}

//장바구니 아이템 삭제
const deleteItemDao = async (customerId, cartId) => {
  return await dataSource.query(
    `
    DELETE
    FROM carts
    WHERE customer_id = ? AND id = ?
    `,
    [customerId, cartId]
  );
};

module.exports = {
  addItemDao,
  getCartDao,
  existingItemCheckDao,
  addQuantityDao,
  deleteItemDao,
  updateCartQuantityDao,
};
