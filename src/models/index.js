const enums = require('./enums');

const {
  getVerificationCodeDao,
  setNewPasswordDao,
  loginEmailCheckDao,
  createUserDao,
  dupliCheckEmailDao,
  dupliCheckPhoneDao,
} = require('./userDao');
const {
  getOrdersDao,
  getOrderListDao,
  customerCartDao,
  checkOrderStatusDao,
  checkCreditDao,
  MoveCartToOrderDao,
  cancelOrdersDao,
} = require('./orderDao');

const { listProductsDao, productDetailDao } = require('./productDao');

const {
  getReviewDao,
  createReviewDao,
  updateReviewDao,
  deleteReviewDao,
} = require('./reviewDao');

const {
  updateItemDao,
  getCartDao,
  purgeCartDao,
} = require('./cartDao');

const {
  postOrderAddressDao,
  customerAddressDao,
  getAddressDao,
} = require('./addressDao');

module.exports = {
  userDao: {
    getVerificationCodeDao,
    setNewPasswordDao,
    loginEmailCheckDao,
    createUserDao,
    dupliCheckEmailDao,
    dupliCheckPhoneDao,
  },
  orderDao: {
    getOrdersDao,
    getOrderListDao,
    customerCartDao,
    checkOrderStatusDao,
    checkCreditDao,
    MoveCartToOrderDao,
    cancelOrdersDao,
  },
  enums,
  productDao: {
    listProductsDao,
    productDetailDao,
  },
  reviewDao: {
    getReviewDao,
    createReviewDao,
    updateReviewDao,
    deleteReviewDao,
  },
  cartDao: {
    updateItemDao,
    getCartDao,
    purgeCartDao,
  },
  addressDao: {
    postOrderAddressDao,
    customerAddressDao,
    getAddressDao,
  },
};
