// const { orderStatusEnum } = require('./enums');

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
  postOrderAddressDao,
  customerAddressDao,
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
    postOrderAddressDao,
    customerAddressDao,
    getOrderListDao,
    customerCartDao,
    checkOrderStatusDao,
    checkCreditDao,
    MoveCartToOrderDao,
    cancelOrdersDao,
  },
  // eums: {
  //   orderStatusEnum,
  // }
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
};
