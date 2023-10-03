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

const {
  addItemService,
  getCartService,
  updateCartService,
} = require('./cartService');

const { getOrderAddressService } = require('./addressService');

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
  cartService: {
    addItemService,
    getCartService,
    updateCartService,
  },
  addressService: {
    getOrderAddressService,
  },
};
