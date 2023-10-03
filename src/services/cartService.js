const { cartDao } = require('../models');
const { addItemDao, getCartDao, updateCartDao, purgeCartDao } = cartDao;

// 장바구니 아이템 (제품) 추가 - 완
const addItemService = async (customerId, productId, quantity) => {
  return await addItemDao(customerId, productId, quantity);
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
      await addItemDao(customerId, productId, quantity);
    }
  };
  await cartUpdate();
  return await getCartDao(customerId)
};

module.exports = {
  addItemService,
  getCartService,
  updateCartService,
};
