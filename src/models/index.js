const enums = require('./enums');

const {
  getVerificationCodeDao,
  setNewPasswordDao,
  loginEmailCheckDao,
  createUserDao,
  dupliCheckEmailDao,
  dupliCheckPhoneDao,
  getUserInfoDao,
} = require('./userDao');

const { listProductsDao, productDetailDao } = require('./productDao');

const {
  getReviewDao,
  createReviewDao,
  updateReviewDao,
  deleteReviewDao,
} = require('./reviewDao');

const {
  addItemDao,
  getCartDao,
  existingItemCheckDao,
  addQuantityDao,
  deleteItemDao,
  updateCartQuantityDao,
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
  payStatusChangeDao,
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
    getUserInfoDao,
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
    addItemDao,
    getCartDao,
    existingItemCheckDao,
    addQuantityDao,
    deleteItemDao,
    updateCartQuantityDao,
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
    payStatusChangeDao,
  },
};
