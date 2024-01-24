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
  updateCartQuantityController,
  deleteItemController,
} = require('./cartController');
const {
  createOrderController,
  getOrderListController,
  getOrderDetailController,
  cancelOrdersController,
} = require('./orderController');
const {
  getTotalAmountController,
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
    updateCartQuantityController,
    deleteItemController,
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
    getTotalAmountController,
    getAmountController,
    checkAmountController,
    walletDeductionController,
    walletRechargeController,
  }
};
