const {
  getVerificationCodeDao,
  setNewPasswordDao,
  loginEmailCheckDao,
  createUserDao,
  dupliCheckEmailDao,
  dupliCheckNicknameDao,
  dupliCheckPhoneDao,
} = require('./userDao');

module.exports = {
  userDao: {
    getVerificationCodeDao,
    setNewPasswordDao,
    loginEmailCheckDao,
    createUserDao,
    dupliCheckEmailDao,
    dupliCheckNicknameDao,
    dupliCheckPhoneDao,
  },
};
