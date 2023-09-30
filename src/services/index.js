const {
  createUserService,
  dupliCheckEmailService,
  getVerificationCodeService,
  setNewPasswordService,
  loginService,
} = require('./userService');

const { listProductsService } = require('./productService');

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
  },
};
