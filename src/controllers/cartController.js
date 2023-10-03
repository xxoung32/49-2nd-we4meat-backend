const { throwError } = require('../../utils/throwError.js');
const { cartService } = require('../services');
const {
  addItemService,
  insertCartsService,
  getCartService,
  deleteCartByIdService,
} = cartService;

// 장바구니 생성
const addItemController = async (req, res) => {
  try {
    const customerId = req.user.id;
    const { productId, quantity } = req.body;
    if (!customerId) throwError(400, 'NO_KEY_UID');
    if (!productId) throwError(400, 'NO_KEY_PID');
    if (!quantity) throwError(400, 'NO_KEY_QUANT');
    return res.status(200).json({
      message: 'ITEM_ADDED',
      data: await addItemService(customerId, productId, quantity),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 장바구니 목록 조회
const getCartController = async (req, res) => {
  try {
    console.log('1.getCarts by id controller connected'); //레이어드 패턴 연결확인
    const customerId = req.user.id;
    //필수값 확인하기
    if (!customerId) throwError(400, 'NO_KEY');

    //Business logic
    console.log('4.controller file after get carts service function call');
    return res.status(200).json({
      message: 'CART_LOADED',
      data: await getCartService(customerId),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 장바구니 아이템 (제품) 추가
const insertCartsController = async (req, res) => {
  try {
    console.log('1.createCarts controller connect'); //레이어드 패턴 연결확인
    const customerId = req.user.id;
    const products = req.body.products;
    // console.log(req.body.products.length, 'body legnth');
    //필수값 확인하기
    if (!customerId || !products) throwError(400, '필수 필드를 확인해주세요');
    //Business logic
    await insertCartsService(customerId, products);
    console.log('4.controller file after create carts service function call');
    return res.status(201).json({ message: 'Cart inserted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 400).json({ message: error.message });
  }
};

//장바구니 삭제
const deleteCartByIdController = async (req, res) => {
  try {
    console.log('1.delete carts by id controller connected');
    const customerId = req.user.id;
    const cartId = req.query.id; //====> query string 소헌님꺼 참고했는데 통신 실패함.....

    if (!cartId || !customerId)
      throwError(400, 'cartId와 customer_id가 없습니다');

    //business logic
    await deleteCartByIdService(cartId, customerId);
    console.log(
      '4.controller file after update carts delete service function call',
    ); //레이어드 패턴 연결 확인
    return res.status(201).json({ message: 'ITEM_DELETED' });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 400).json({ message: error.message });
  }
};

module.exports = {
  addItemController,
  insertCartsController,
  getCartController,
  deleteCartByIdController,
};
