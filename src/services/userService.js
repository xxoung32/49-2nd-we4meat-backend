const { userDao } = require('../models');
const {
  getVerificationCodeDao,
  setNewPasswordDao,
  createUserDao,
  dupliCheckEmailDao,
  dupliCheckPhoneDao,
  loginEmailCheckDao,
} = userDao;

const createUserService = async (
  name,
  email,
  password,
  phoneNumber,
) => {
  try {
    createUserDao(
      name,
      email,
      password,
      phoneNumber,
    );
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    throw error;
  }
};

const dupliCheckEmailService = async (email, next) => {
  try {
    dupliCheckEmailDao(email);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const dupliCheckPhoneService = async (phoneNumber, next) => {
  try {
    dupliCheckPhoneDao(phoneNumber);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const loginService = async (email) => {
  return await loginEmailCheckDao(email);
};

const getVerificationCodeService = (email) => {
  const id = getVerificationCodeDao(email);
  return id;
};

const setNewPasswordService = (id, password) => {
  setNewPasswordDao(id, password);
  return 'password updated';
};

module.exports = {  
  createUserService,
  dupliCheckEmailService,
  dupliCheckPhoneService,
  getVerificationCodeService,
  setNewPasswordService,
  loginService,
};
