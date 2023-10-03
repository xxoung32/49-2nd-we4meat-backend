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
  addItemDao,
  getCartDao,
  insertCartsDao,
  deleteCartByIdDao,
  deleteExistingCartsDao,
} = require('./cartDao');

module.exports = {
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
    addItemDao,
    getCartDao,
    insertCartsDao,
    deleteCartByIdDao,
    deleteExistingCartsDao,
  },
};
