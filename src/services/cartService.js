const { cartDao } = require('../models');
const {
  addItemDao,
  getCartDao,
  existingItemCheckDao,
  addQuantityDao,
  deleteItemDao,
  updateCartQuantityDao,
} = cartDao;

//장바구니 아이템 추가하기
const addItemService = async (customerId, productId, quantity) => {
  const existingCartItem = await existingItemCheckDao(customerId, productId);
  console.log('existingCartItem: ', existingCartItem);
  if (existingCartItem.length > 0) {
    // 이미 장바구니에 해당 제품이 있으면 수량 업데이트
    const cartId = existingCartItem[0].id;
    return await addQuantityDao(customerId, cartId, quantity);
  } else { 
    // 장바구니에 해당 제품이 없으면 추가
    return await addItemDao(customerId, productId, quantity);
  }
};

// 장바구니 목록 조회 - 완
const getCartService = async (customerId) => {
  return await getCartDao(customerId);
};

//장바구니 내 수량 변경
const updateCartQuantityService = async(customerId, cartId, quantity) => {
return await updateCartQuantityDao(customerId, cartId, quantity)
};

//장바구니 아이템 삭제
const deleteItemService = async(customerId, cartId) => {
  return await deleteItemDao(customerId, cartId)
};


module.exports = {
  addItemService,
  getCartService,
  updateCartQuantityService,
  deleteItemService,
};
