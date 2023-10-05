const { dataSource } = require('./dataSource');

const getVerificationCodeDao = async (email) => {
  const [id] = await dataSource.query(
    `
        SELECT id FROM customers WHERE email = ?
        `,
    [email],
  );
  return id;
};

const setNewPasswordDao = async (id, password) => {
  await dataSource.query(
    `
  UPDATE customers SET password = ? WHERE id = ? 
  `,
    [password, id],
  );
};

const loginEmailCheckDao = async (email) => {
  const emailCheck = await dataSource.query(
    `
    SELECT id, email, password, name
    FROM customers
    WHERE email = ?;
  `,
    [email],
  );
  return emailCheck;
};

const createUserDao = async (name, email, password, phoneNumber) => {
  const queryRunner = dataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const userCredential = await dataSource.query(
      `INSERT INTO customers(
      name, email, password, phonenumber) VALUES (?, ?, ?, ?);
  `,
      [name, email, password, phoneNumber],
    );

    const userInfo = await dataSource.query(
      `
      SELECT id FROM customers WHERE email = ?
    `,
      [email],
    );

    await dataSource.query(
      `INSERT INTO customer_wallets (customer_id, credit) VALUES (?, 0)
  `,
      [userInfo[0].id],
    );
    return userCredential;
  } catch (err) {
    console.error(err);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};

const dupliCheckEmailDao = async (email) => {
  const checkVal = await dataSource.query(
    `
    SELECT email FROM customers WHERE email = ?
    `,
    [email],
  );
  return checkVal.length;
};

const dupliCheckPhoneDao = async (phonenumber) => {
  const checkVal = await dataSource.query(
    `
    SELECT phonenumber FROM customers WHERE phonenumber = ?
    `,
    [phonenumber],
  );
  return checkVal.length;
};

module.exports = {
  getVerificationCodeDao,
  setNewPasswordDao,
  loginEmailCheckDao,
  createUserDao,
  dupliCheckEmailDao,
  dupliCheckPhoneDao,
};
