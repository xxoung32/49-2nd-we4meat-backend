require('dotenv').config();

const { tokenGeneration, isValidData, throwError } = require('../../utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { userService } = require('../services');
const {
  createUserService,
  getVerificationCodeService,
  setNewPasswordService,
  loginService,
  dupliCheckEmailService,
  dupliCheckPhoneService
} = userService;

const signUpController = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;

    //필수 값 확인 - falsy 사용
    if (!name || !email || !password || !phoneNumber)
      throwError(400, 'MISSING_NAME_EMAIL_PASSWORD_OR_PHONENUM');

    // 이메일 형식 확인하는 정규식
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) throwError(400, 'CHECK_EMAIL_FORMAT');

    if (password.length < 10) throwError(400, 'PASSWORD_10_DIGIT_MININUM');

    // 비밀번호 확인에 필요한 정규식
    const pwValidation = /.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|-].*/;
    if (!pwValidation.test(password))
      throwError(409, 'PASSWORD_SPECIAL_CHAR_NEEDED');

    // bcrypt
    const hash = await bcrypt.hash(password, 12);

    await createUserService(name, email, hash, phoneNumber);
    return res.status(201).json({
      message: 'SIGNUP_SUCCESS',
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const dupliCheckController = async (req, res) => {
  //바디에, 이메일이 있으면, 엘스이프 닉네임.
  try {
    const { email, phoneNumber } = req.body;
    if (email) {
      const check = await dupliCheckEmailService(email);
      console.log(check)
      if (check > 0) {
        return res.status(400).json({ message: 'EMAIL_IN_USE' });
      } else {
        return res.status(200).json({ message: 'EMAIL_AVAILABLE' });
      }
    } else if (phoneNumber) {
      const check = await dupliCheckPhoneService(phoneNumber);
      if (check > 0) {
        return res.status(400).json({ message: 'PHONENUM_IN_USE' });
      } else {
        return res.status(200).json({ message: 'PHONENUM_OK' });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) throwError(403, 'EMAIL_INVALID');
    // 이메일 체크
    const userCheck = await loginService(email, next);
    if (!userCheck) throwError(401, 'EMAIL_NOT_FOUND');

    // 비밀번호 체크
    const passwordCheck = userCheck[0].password;
    const result = await bcrypt.compare(password, passwordCheck);
    if (result) {
      const userId = userCheck[0].id;
      const username = userCheck[0].name;
      if (!tokenGeneration(userId)) throwError(401, 'TOKEN_GEN_FAIL');
      return res.status(200).json({
        message: 'LOGIN_SUCCESS',
        token: `${tokenGeneration(userId)}`,
        id: userId,
        name: username,
      });
    }
    throwError(401, 'PASSWORD_INVALID');
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getVerificationCodeController = async (req, res, next) => {
  try {
    const { email, redirect_uri } = req.body;
    const id = await getVerificationCodeService(email);
    if (!id) throwError(401, 'NO_SUCH_USER');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODE_MAILER_USER,
        pass: process.env.NODE_MAILER_PASS,
      },
    });
    const mailOptions = {
      from: process.env.NODE_MAILER_USER,
      to: email,
      subject: `정사각 비밀번호 초기화 링크입니다.`,
      html: `<span style="color:blue">${redirect_uri}?token=${jwt.sign(
        id,
        process.env.JWT_SECRET,
        {
          expiresIn: '5m',
        },
      )}</span> 👈 정사각 비밀번호 초기화 링크입니다. 5분 후 링크가 만료됩니다.`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
    return res.status(201).json({
      email,
      isVerifiedUser: 'Y',
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const setNewPasswordController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { password } = req.body;
    if (!password) throwError(400, 'KEY_ERROR');
    const passwordRegExp = /[ !@#$%^&*(),.?":{}|<>]/g;
    if (isValidData(passwordRegExp, password)) {
      const hash = await bcrypt.hash(password, 12);
      res.status(201).json({ message: await setNewPasswordService(id, hash) });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  signUpController,
  loginController,
  getVerificationCodeController,
  setNewPasswordController,
  dupliCheckController,
};
