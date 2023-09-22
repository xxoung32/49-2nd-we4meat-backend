const {
  createUserService,
  dupliCheckEmailService,
  dupliCheckNicknameService,
  getVerificationCodeService,
  setNewPasswordService,
  loginService,
} = require('./userService');

module.exports = {
  userService: {
    createUserService,
    dupliCheckEmailService,
    dupliCheckNicknameService,
    getVerificationCodeService,
    setNewPasswordService,
    loginService,
  },
};
