const {
  signUpController,
  getVerificationCodeController,
  setNewPasswordController,
  loginController,
  dupliCheckController,
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
  getOrdersController,
  addToOrdersController,
  cancelOrdersController,
} = require('./orderController');

const { getAddressController } = require('./addressController');

module.exports = {
  userController: {
    signUpController,
    getVerificationCodeController,
    setNewPasswordController,
    loginController,
    dupliCheckController,
  },
  orderController: {
    getOrdersController,
    addToOrdersController,
    cancelOrdersController,
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
  addressController: {
    getAddressController,
  },
};
