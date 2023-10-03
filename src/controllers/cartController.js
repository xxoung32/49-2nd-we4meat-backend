const { throwError } = require('../../utils/throwError.js');
const { cartService } = require('../services');
const {
  addItemService,
  getCartService,
  updateCartService,
  deleteCartByIdService,
} = cartService;

// 장바구니 아이템 (제품) 추가 - 완
const addItemController = async (req, res) => {
  try {
    const customerId = req.user.id;
    const { productId, quantity } = req.body;
    if (!customerId) throwError(400, 'KEY_ERROR_UID');
    if (!productId) throwError(400, 'KEY_ERROR_PID');
    if (!quantity) throwError(400, 'KEY_ERROR_QUANT');
    return res.status(200).json({
      message: 'ITEM_ADDED',
      data: await addItemService(customerId, productId, quantity),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 장바구니 목록 조회 - 완
const getCartController = async (req, res, next) => {
  try {
    const customerId = req.user.id;
    if (!customerId) throwError(400, 'KEY_ERROR');
    return res.status(200).json({
      message: 'CART_LOADED',
      data: await getCartService(customerId),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 장바구니 업데이트
const updateCartController = async (req, res) => {
  try {
    const customerId = req.user.id;
    const products = req.body.products;

    if (!customerId || !products) throwError(400, 'KEY_ERROR');
    //Business logic
    return res.status(201).json({
      message: 'CART_UPDATED',
      data: updateCartService(customerId, products),
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 400).json({ message: error.message });
  }
};

// //장바구니 삭제 (안 쓸것 같은데...)
// const deleteCartByIdController = async (req, res) => {
//   try {
//     console.log('1.delete carts by id controller connected');
//     const customerId = req.user.id;
//     const cartId = req.query.id; //====> query string 소헌님꺼 참고했는데 통신 실패함.....

//     if (!cartId || !customerId)
//       throwError(400, 'cartId와 customer_id가 없습니다');

//     //business logic
//     await deleteCartByIdService(cartId, customerId);
//     console.log(
//       '4.controller file after update carts delete service function call',
//     ); //레이어드 패턴 연결 확인
//     return res.status(201).json({ message: 'ITEM_DELETED' });
//   } catch (error) {
//     console.log(error);
//     return res.status(error.statusCode || 400).json({ message: error.message });
//   }
// };

module.exports = {
  addItemController,
  getCartController,
  updateCartController,
  // deleteCartByIdController,
};
