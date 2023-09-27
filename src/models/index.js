const {
  getOrderDao,
  postOrderAddressDao,
  customerAddressDao,
} = require('./orderDao');

module.exports = {
  orderDao: {
    getOrderDao,
    postOrderAddressDao,
    customerAddressDao,
  },
};
