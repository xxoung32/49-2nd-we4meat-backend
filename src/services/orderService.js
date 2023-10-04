const { throwError } = require('../../utils');
const { orderDao, cartDao, enums } = require('../models');
const { orderStatusEnum } = enums;
const { getCartDao } = cartDao;
const {
  getOrdersDao,
  getOrderListDao,
  customerCartDao,
  checkOrderStatusDao,
  checkCreditDao,
  MoveCartToOrderDao,
  cancelOrdersDao,
} = orderDao;


//주문생성
const createOrderService = async (userId) => {
  const cart = await getCartDao(userId);
  console.log(cart);
};

//주문상세 불러오기
const getOrdersService = async (userId) => {
  if (!customerOrders[0]) throwError(400, 'NO_ORDERS')
  return await getOrdersDao(userId);
};

//주문하기
const addToOrdersService = async (userId, totalPrice) => {
  const customers_Credit = await checkCreditDao(userId);
  const customers_Carts = await customerCartDao(userId);
  if ((customers_Credit < totalPrice) || (totalPrice < 0)) throwError(400, 'NOT_ENOUGH_CREDIT')
  if (customers_Carts.length == 0) throwError(400, 'NO_ORDERS')
  return MoveCartToOrderDao(userId, totalPrice, customers_Carts);
};
//주문취소하기
const cancelOrdersService = async (userId, orderId, totalPrice) => {
  const orderStatus = await checkOrderStatusDao(orderId);
  if (orderStatus == orderStatusEnum.CANCELED) throwError(400, 'ALREADY_CANCELED')
  return await cancelOrdersDao(userId, orderId, totalPrice);
};

module.exports = {
  createOrderService,
  getOrdersService,
  addToOrdersService,
  cancelOrdersService,
};
