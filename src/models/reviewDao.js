const { dataSource } = require('./dataSource');

const getReviewDao = async (userId, productId) => {
  await dataSource.query(
    `
    SELECT * FROM reviews WHERE customer_id = ? & product_id = ?
    `,
    [userId, productId],
  );
};

const createReviewDao = async (userId, { review, reviewId }) => {
  await dataSource.query(
    `
    INSERT INTO reviews (review, customer_id, thread_id) VALUES (?, ?, ?)
    `,
    [review, userId, reviewId],
  );
};

const updateReviewDao = async (userId, { review, reviewId }) => {
  await dataSource.query(
    `
    UPDATE reviews SET review = ? WHERE customer_id = ? AND id = ?
    `,
    [review, userId, reviewId],
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
