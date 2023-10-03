const { dataSource } = require('./dataSource');

const getReviewDao = async (productId) => {
  await dataSource.query(
    `
    SELECT * FROM reviews WHERE customer_id = ? & product_id = ?
    `,
    [userId, productId],
  );
};

const createReviewDao = async (userId, productId, title, body, imgUrl) => {
  await dataSource.query(
    `
    INSERT INTO reviews (customer_id, product_id, title, body, imgUrl) VALUES (?, ?, ?, ?, ?)
    `,
    [userId, productId, title, body, imgUrl],
  );
};

const updateReviewDao = async (userId, productId, title, body, imgUrl) => {
  await dataSource.query(
    `
    UPDATE reviews SET title =?, body = ?, imgUrl =?  WHERE customer_id = ? AND id = ?
    `,
    [title, body, imgUrl, userId, productId],
  );
};

const deleteReviewDao = async (userId, reviewId) => {
  await dataSource.query(
    `
    DELETE FROM reviews WHERE customer_id = ? AND id = ?
    `,
    [userId, reviewId],
  );
};

module.exports = {
  getReviewDao,
  createReviewDao,
  updateReviewDao,
  deleteReviewDao,
};
