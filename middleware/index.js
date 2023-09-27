require('dotenv').config();
const jwt = require('jsonwebtoken');
const { throwError } = require('../util/throwError');

exports.verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  // 토큰 유무 확인
  if (!token) {
    throwError(401, 'access token denied');
  }

  try {
    // const decoded = jwt.verify("해시값" , '비밀키')
    const decoded = jwt.verify(
      token.replace('Bearer ', ''),
      process.env.JWT_SECRET,
    );
    const userId = decoded['id'];
    req.user = decoded;
    req.userId = userId;
    next();
  } catch (err) {
    throwError(403, 'invalid token');
  }
};
