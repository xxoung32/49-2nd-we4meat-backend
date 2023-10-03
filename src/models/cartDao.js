const { dataSource } = require('./dataSource');


// 장바구니 아이템 (제품) 추가
const addItemDao = async(customerId, productId, quantity) => {
    const status = 1;
    return await dataSource.query(
        `
        INSERT
        INTO carts (customer_id, product_id, quantity, status)
        VALUES (?, ? ,?, ?)
        `, [customerId, productId, quantity, status]
    )
};

// 장바구니 조회
const getCartDao = async (customerId) => {
    console.log('3. getCartsByIdDao connected'); // 레이어드 패턴 연결확인
    const getCartsData = await dataSource.query(
      `
          SELECT c.id, p.product_name, p.product_img, p.weight, cart.quantity, p.price, (cart.quantity * p.price) AS price 
          FROM customers AS c 
          JOIN carts AS cart ON c.id = cart.customer_id 
          JOIN products AS p ON cart.product_id = p.id 
          WHERE cart.status = 1 AND c.id = ? `,
      [customerId], // 배열로 전달하기
    );
    console.log('getCartsDataById: ', getCartsData); //데이터 확인
    return getCartsData;
  };

// 장바구니 최종 업데이트(생성)
const insertCartsDao = async (customerId, productId, quantity) => {
  console.log('3.insert carts dao connected'); // 레이어드 패턴 연결확인
  const insertCartsData = await dataSource.query(
    `
    INSERT INTO carts (customer_id, product_id, quantity)
    VALUES (?, ?, ?)`,
    [customerId, productId, quantity], //배열로 전달하기
  );
  console.log('insertCartsdata: ', insertCartsData); //데이터 확인
  return insertCartsData;
};

// 장바구니 기존 카트 삭제하기
const deleteExistingCartsDao = async (customerId) => {
  console.log('3.delete existing cart dao connected'); //레이어드 패턴 연결확인
  const existingCartData = await dataSource.query(
    `
        DELETE
        FROM carts
        WHERE customer_id = ?
    `,
    [customerId],
  );
  console.log('delete exsiting cart: ', existingCartData);
  return existingCartData;
};



// //장바구니 상태변경(2는 주문상태 3은 구매완료) =====> order함수를 불러오든 아님 order에서 처리하든 해야될 거 같아서 일단 보류함
// const cartsStatusDao = async () => {
//     console.log("3. cartsStatusDao connected"); // 레이어드 패턴 연결확인
//     const cartsStatusData = await dataSource.query(`

//     UPDATE carts
//     SET staus =2`,
//     );
// }

//장바구니 삭제  ====> 통신 실패
const deleteCartByIdDao = async (productId, customerId) => {
  console.log('3. deleteCartsByIdDao connected'); //레이어드 패턴 연결확인
  const deleteCartsData = await dataSource.query(
    `
    UPDATE carts
    SET status = 3
    WHERE product_id = ? AND customer_id = ?
    `,
    [product_id, customer_id],
  ); // 배열로 전달하기
  return deleteCartsData;
};

module.exports = {
  addItemDao,
  getCartDao,
  insertCartsDao,
  deleteCartByIdDao,
  deleteExistingCartsDao,
};
