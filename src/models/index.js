const enums = require('./enums');

const {
  getVerificationCodeDao,
  setNewPasswordDao,
  loginEmailCheckDao,
  createUserDao,
  dupliCheckEmailDao,
  dupliCheckPhoneDao,
} = require('./userDao');

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
  existingItemCheckDao,
  updateQuantityDao,
} = require('./cartDao');

const {
  customerCartDao,
  MoveCartToOrderDao,
  getOrderListDao,
  getOrderDetailDao,
  checkOrderStatusDao,
  cancelOrdersDao,
} = require('./orderDao');

const {
  postOrderAddressDao,
  customerAddressDao,
  getAddressDao,
} = require('./addressDao');

const {
  getWalletBalanceDao,
  walletUpdateDao,
  getOrderAmountDao,
} = require('./paymentDao');

module.exports = {
  enums,
  userDao: {
    getVerificationCodeDao,
    setNewPasswordDao,
    loginEmailCheckDao,
    createUserDao,
    dupliCheckEmailDao,
    dupliCheckPhoneDao,
  },
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
    existingItemCheckDao,
    updateQuantityDao,
  },
  orderDao: {
    customerCartDao,
    MoveCartToOrderDao,
    getOrderListDao,
    getOrderDetailDao,
    checkOrderStatusDao,
    cancelOrdersDao,
  },
  addressDao: {
    postOrderAddressDao,
    customerAddressDao,
    getAddressDao,
  },
  paymentDao: {
    getWalletBalanceDao,
    walletUpdateDao,
    getOrderAmountDao,
  },
  paymentDao: {
    getWalletBalanceDao,
    walletUpdateDao,
    getOrderAmountDao,
  },
};
