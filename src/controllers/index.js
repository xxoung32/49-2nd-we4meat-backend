const {
  signUpController,
  getVerificationCodeController,
  setNewPasswordController,
  loginController,
  dupliCheckController,
} = require('./userController');

const {
  getOrdersController,
  addToOrdersController,
  cancelOrdersController,
} = require('./orderController');

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
};
