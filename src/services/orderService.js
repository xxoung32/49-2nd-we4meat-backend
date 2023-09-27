const { dataSource } = require('../module/dataSource');
const { throwError } = require('../utils');
const { orderDao } = require('../models');
const getOrderDao = require('../models/orderDao');

const getOrderService = (res, req) => {
  return;
  // getOrderDao()
};

module.exports = {
  getOrderService,
};
