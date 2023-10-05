const { dataSource } = require('./dataSource');

const getReviewDao = async (userId, productId) => {
  return await dataSource.query(
    `
    SELECT * FROM reviews WHERE customer_id = ? AND product_id = ?
    `,
    [userId, productId],
  );
};

const createReviewDao = async (userId, title, body, imgUrl) => {
  return await dataSource.query(
    `
    INSERT INTO reviews (customer_id, title, body, imgUrl) VALUES (?, ?, ?, ?)
    `,
    [userId, title, body, imgUrl],
  );
};

const updateReviewDao = async (userId, reviewId, title, body, imgUrl) => {
  return await dataSource.query(
    `
    UPDATE reviews SET title =?, body = ?, imgUrl =?  WHERE customer_id = ? AND id = ?
    `,
    [title, body, imgUrl, userId, reviewId],
  );
};

const deleteReviewDao = async (userId, reviewId) => {
  return await dataSource.query(
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
