const {
  createUserService,
  dupliCheckEmailService,
  dupliCheckPhoneService,
  getVerificationCodeService,
  setNewPasswordService,
  loginService,
  getUserInfoService,
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
  getOrderListService,
  getOrderDetailService,
  cancelOrdersService,
} = require('./orderService');

const { getOrderAddressService } = require('./addressService');

const {
  walletRechargeService,
  walletDeductionService,
  getOrderlistService,
  getWalletBalanceService,
} = require('./paymentService')

module.exports = {
  userService: {
    createUserService,
    dupliCheckEmailService,
    dupliCheckPhoneService,
    getVerificationCodeService,
    setNewPasswordService,
    loginService,
    getUserInfoService,
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
    getOrderListService,
    getOrderDetailService,
    cancelOrdersService,
  },
  addressService: {
    getOrderAddressService,
  },
  paymentService: {
    walletRechargeService,
    walletDeductionService,
    getOrderlistService,
    getWalletBalanceService,
  }
};
