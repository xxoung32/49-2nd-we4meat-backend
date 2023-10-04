const { orderService } = require('../services');
const { createOrderService, getOrdersService, cancelOrdersService } =
  orderService;
const { throwError } = require('../../utils');

//주문하기
const createOrderController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { totalPrice } = req.body;
    if (!userId) throwError(400, "KEY_ERROR_UID");
    if (!totalPrice) throwError(400, "KEY_ERROR_TP");

    return res.status(200).json({
      message: 'ORDER_CREATED',
      data: await createOrderService(userId, totalPrice),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

//주문정보 불러오기
const getOrdersController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    return res.status(200).json({
      message: 'ORDER_LOADED',
      data: await getOrdersService(userId),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

//주문취소
const cancelOrdersController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { orderId, totalPrice } = req.body;
    return res.status(200).json({
      message: 'ORDER_CANCELED',
      data: await cancelOrdersService(userId, orderId, totalPrice),
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
module.exports = {
  createOrderController,
  getOrdersController,
  cancelOrdersController,
};
