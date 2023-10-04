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
      // 처음에 작성한 코드는 status를 query문에 where절을 사용하여 데이터 필터링을 했는데,
      // 수정 된 코드는 status를 상수로 선언하고 값을 1로 주는 방법으로 수정
      // status를 상수로 선언을 하게 되면 where절을 사용해서 필터링 하는 것보다 가독성과 유지보수성이 더 좋아진다.
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
    [status, customerId],    // ===> 장바구니에는 수량*가격만 필요한데 개별가격이 필요한 이유를 모르겠는데 뭔가요....?
  );
};

// 장바구니 전체 삭제 - 완
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

//개별 아이템 추가할 때 기존 아이템 있는 지 확인 있으면 수량 추가
const existingItemCheckDao = async(customerId, productId) => {
 // 기존 장바구니 있는 지 확인
  const status = 1;
  return await dataSource.query(
    `
    SELECT id
    FROM carts
    WHERE customer_id = ? AND product_id = ? AND status = ?
    `,
    [customerId, productId, status]
    );
  };
 
  // 같은 상품이 있는 경우 수량 추가
  const updateQuantityDao = async (cartId, quantity) => {
    return await dataSource.query(`
      UPDATE carts
      SET quantity = quantity + ?
      WHERE id = ?;
    `, [quantity, cartId]);
  };
  
    

module.exports = {
  updateItemDao,
  getCartDao,
  purgeCartDao,
  existingItemCheckDao,
  updateQuantityDao
};

