const { throwError } = require('../../utils/throwError.js');
const { cartService } = require('../services');
const {
  addItemService,
  getCartService,
  updateCartService,
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

// 장바구니 업데이트 - 완
const updateCartController = async (req, res, next) => {
  try {
    const customerId = req.user.id; 
    const products = req.body.products;
    if (!customerId || !products) throwError(400, 'KEY_ERROR');
    return res.status(201).json({
      message: 'CART_UPDATED',
      data: await updateCartService(customerId, products),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  addItemController,
  getCartController,
  updateCartController,
};
