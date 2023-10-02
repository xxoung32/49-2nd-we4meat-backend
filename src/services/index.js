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
};
