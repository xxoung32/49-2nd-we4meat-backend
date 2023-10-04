const {
  createUserService,
  dupliCheckEmailService,
  getVerificationCodeService,
  setNewPasswordService,
  loginService,
} = require('./userService');

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

const {
  createOrderService,
  getOrdersService,
  addToOrdersService,
  cancelOrdersService,
} = require('./orderService');

const { getOrderAddressService } = require('./addressService');

module.exports = {
  userService: {
    createUserService,
    dupliCheckEmailService,
    getVerificationCodeService,
    setNewPasswordService,
    loginService,
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
  orderService: {
    createOrderService,
    getOrdersService,
    addToOrdersService,
    cancelOrdersService,
  },
  addressService: {
    getOrderAddressService,
  },
};
