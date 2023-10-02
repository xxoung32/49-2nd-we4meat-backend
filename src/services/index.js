const {
  createUserService,
  dupliCheckEmailService,
  getVerificationCodeService,
  setNewPasswordService,
  loginService,
} = require('./userService');

const {
  getOrdersService,
  addToOrdersService,
  cancelOrdersService,
  createOrderAddressService,
} = require('./orderService');

const {
  listProductsService,
  productDetailService,
} = require('./productService');

const {
  getReviewService,
  createReviewService,
  updateReviewService,
  deleteReviewService,
} = require('./reviewService');

module.exports = {
  userService: {
    createUserService,
    dupliCheckEmailService,
    getVerificationCodeService,
    setNewPasswordService,
    loginService,
  },

  orderService: {
    getOrdersService,
    addToOrdersService,
    cancelOrdersService,
    createOrderAddressService,
  },
  productService: {
    listProductsService,
    productDetailService,
  },
  reviewService: {
    getReviewService,
    createReviewService,
    updateReviewService,
    deleteReviewService,
  },
};
