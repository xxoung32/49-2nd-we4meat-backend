const { cartDao } = require('../models');
const {
  updateItemDao,
  getCartDao,
  purgeCartDao,
  existingItemCheckDao,
  updateQuantityDao,
} = cartDao;

// 장바구니 개별 아이템 (제품) 추가 - 완
// 상품리스트 페이지에서 개별 아이템을 추가할 수 있어서 addItemService 함수를 추가
const addItemService = async (customerId, productId, quantity) => {
  const existingCartItem = await existingItemCheckDao(customerId, productId);
  console.log('existingCartItem: ', existingCartItem);
  if (existingCartItem.length > 0) {
    // 이미 장바구니에 해당 제품이 있으면 수량 업데이트
    const cartId = existingCartItem[0].id;
    return await updateQuantityDao(cartId, quantity);
  } else {
    // 장바구니에 해당 제품이 없으면 개별추가
    return await updateItemDao(customerId, productId, quantity);
  }
};

// 장바구니 목록 조회 - 완
const getCartService = async (customerId) => {
  return await getCartDao(customerId);
};

// 장바구니 업데이트 - 완
const updateCartService = async (customerId, products) => {
  let counter = products.length;
  await purgeCartDao(customerId);
  const cartUpdate = async () => {
    for (let i = 0; i < counter; i++) {
      const productItem = products[i];
      const { productId, quantity } = productItem || {};
      await updateItemDao(customerId, productId, quantity);
    }
  };
  await cartUpdate();
};

module.exports = {
  addItemService,
  getCartService,
  updateCartService,
};
