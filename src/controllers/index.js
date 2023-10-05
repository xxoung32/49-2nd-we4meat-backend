const {
  signUpController,
  getVerificationCodeController,
  setNewPasswordController,
  loginController,
  dupliCheckController,
  getUserInfoController,
} = require('./userController');
const {
  listProductController,
  productDetailController,
} = require('./productController');
const {
  getReviewController,
  createReviewController,
  updateReviewController,
  deleteReviewController,
} = require('./reviewController');
const {
  addItemController,
  getCartController,
  updateCartController,
} = require('./cartController');
const {
  createOrderController,
  getOrderListController,
  getOrderDetailController,
  cancelOrdersController,
} = require('./orderController');
const {
  getAmountController,
  checkAmountController,
  walletDeductionController,
  walletRechargeController,
} = require('./paymentController')

const { getAddressController } = require('./addressController');

module.exports = {
  userController: {
    signUpController,
    getVerificationCodeController,
    setNewPasswordController,
    loginController,
    dupliCheckController,
    getUserInfoController,
  },
  productController: {
    listProductController,
    productDetailController,
  },
  reviewController: {
    getReviewController,
    createReviewController,
    updateReviewController,
    deleteReviewController,
  },
  cartController: {
    addItemController,
    getCartController,
    updateCartController,
  },
  orderController: {
    createOrderController,
    getOrderListController,
    getOrderDetailController,
    cancelOrdersController,
  },
  addressController: {
    getAddressController,
  },
  paymentController: {
    getAmountController,
    checkAmountController,
    walletDeductionController,
    walletRechargeController,
  }
};
