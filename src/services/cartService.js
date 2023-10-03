const { cartDao } = require('../models');
const {
  addItemDao,
  getCartDao,
  updateCartDao,
  deleteCartByIdDao,
  deleteExistingCartsDao,
} = cartDao;

// 장바구니 아이템 (제품) 추가 - 완
const addItemService = async (customerId, productId, quantity) => {
  return await addItemDao(customerId, productId, quantity)
}

// 장바구니 목록 조회 - 완
const getCartService = async (customerId) => {
  return await getCartDao(customerId);
};

// 장바구니 생성하기
const updateCartService = async (customerId, products) => {
  await deleteExistingCartsDao(customerId); //기존 카트 삭제하기
  async function cartUpdate() {
    const newCartList = products;
    console.log('typeof ', typeof newCartList);
    console.log('newCartList: ', newCartList);

    for (let i = 0; i < newCartList.length; i++) {
      const productItem = newCartList[i];
      console.log(productItem);
      const { productId, quantity } = productItem || {};
      // productId와 quantity 변수를 여기서 사용
      console.log(productId, quantity);
      await updateCartDao(customerId, productId, quantity);
    }
  }
  await cartUpdate();
  return 'INSERT_COMPLITED.';
};

//장바구니 삭제
const deleteCartByIdService = async (id, customerId) => {
  console.log('2.delete cart by id service connected'); //레이어드 패턴 연결확인
  const deleteCartByID = await deleteCartByIdDao(id, customerId);
  return deleteCartByID;
};

module.exports = {
  addItemService,
  getCartService,
  updateCartService,
  deleteCartByIdService,
};
