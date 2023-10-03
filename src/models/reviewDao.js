const { dataSource } = require('./dataSource');

const getReviewDao = async (productId) => {
  return await dataSource.query(
    `
    SELECT * FROM reviews WHERE product_id = ?
    `,
    [productId],
  );
};

const createReviewDao = async (userId, productId, title, body, imgUrl) => {
  return await dataSource.query(
    `
    INSERT INTO reviews (customer_id, product_id, title, body, imgUrl) VALUES (?, ?, ?, ?, ?)
    `,
    [userId, productId, title, body, imgUrl],
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
