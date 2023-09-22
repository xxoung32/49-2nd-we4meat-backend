const { dataSource } = require('./dataSource');

const getVerificationCodeDao = async (email) => {
  const [id] = await dataSource.query(
    `
        SELECT id FROM users WHERE email = ?
        `,
    [email],
  );
  return id;
};

const setNewPasswordDao = async (id, password) => {
  await dataSource.query(
    `
  UPDATE users SET password = ? WHERE id = ? 
  `,
    [password, id],
  );
};

const loginEmailCheckDao = async (email) => {
  const emailCheck = await dataSource.query(
    `
    SELECT id, email, password, nickname
    FROM users
    WHERE email = ?;
  `,
    [email],
  );
  return emailCheck;
};

const createUserDao = async (
  name,
  email,
  password,
  phoneNumber,
) => {
  const userCredential = dataSource.query(
    `INSERT INTO customers(
      name, email, password, phonenumber) VALUES (?, ?, ?, ?);
  `,
    [name, email, password, phoneNumber],
  );
  return userCredential;
};

const dupliCheckEmailDao = async (email) => {
  const checkVal = await dataSource.query(
    `
    SELECT email FROM users WHERE email = ?
    `,
    [email],
  );
  return checkVal.length;
};

const dupliCheckPhoneDao = async (phonenumber) => {
  const checkVal = await dataSource.query(
    `
    SELECT phonenumber FROM users WHERE phonenumber = ?
    `,
    [phonenumber],
  );
  return checkVal.length;
};

const dupliCheckNicknameDao = async (nickname) => {
  const checkVal = await dataSource.query(
    `
    SELECT name FROM users WHERE name = ?
    `,
    [nickname],
  );
  return checkVal.length;
};

module.exports = {
  getVerificationCodeDao,
  setNewPasswordDao,
  loginEmailCheckDao,
  createUserDao,
  dupliCheckEmailDao,
  dupliCheckNicknameDao,
  dupliCheckPhoneDao
};
