const { throwError } = require('../../utils/throwError.js');
const { cartService } = require('../services');
const {
  addItemService,
  getCartService,
  updateCartQuantityService,
  deleteItemService,
} = cartService;

// 장바구니 아이템 (제품) 추가 - 완
const addItemController = async (req, res, next) => {
  try {
    const customerId = req.user.id;
    const { productId, quantity } = req.body;
    if (!customerId) throwError(400, 'KEY_ERROR_UID');
    if (!productId) throwError(400, 'KEY_ERROR_PID');
    if (!quantity) throwError(400, 'KEY_ERROR_QUANT');
    return res.status(201).json({
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

//장바구니 내 수량 변경
const updateCartQuantityController = async (req, res, next) => {
  try {
    const customerId = req.user.id;
    const cartId = req.params.cartId;
    const { quantity } = req.body;
    if (!customerId) throwError(400, 'KEY_ERROR_UID');
    if (!cartId) throwError(400, 'KEY_ERROR_CID');
    if (!quantity) throwError(400, 'KEY_ERROR_QUANT');
    return res.status(201).json({
      message: 'ITEM_QUANTITY_UPDATED',
      data: await updateCartQuantityService(customerId, cartId, quantity),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

//장바구니 아이템 삭제
const deleteItemController = async (req, res, next) => {
  try {
    const customerId = req.user.id;
    const cartId = req.params.cartId
    if (!customerId) throwError(400, 'KEY_ERROR_UID');
    if (!cartId) throwError(400, 'KEY_ERROR_CID');
    return res.status(200).json({
      message: 'ITEM_DELETE',
      data: await deleteItemService(customerId, cartId),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};



module.exports = {
  addItemController,
  getCartController,
  updateCartQuantityController,
  deleteItemController,
};
