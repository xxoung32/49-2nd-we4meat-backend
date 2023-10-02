const { reviewDao } = require('../../src/models');
const { createReviewDao, updateReviewDao, deleteReviewDao } = reviewDao;

const getReviewService = async (productId) => {
  getReviewDao(productId);
  return 'Review received';
};

const createReviewService = async (id, body) => {
  createReviewDao(id, body);
  return 'Review created';
};
const updateReviewService = async (id, body) => {
  updateReviewDao(id, body);
  return 'Review updated';
};
const deleteReviewService = async (id, productId) => {
  deleteReviewDao(id, productId);
  return 'Review deleted';
};

module.exports = {
  getReviewService,
  createReviewService,
  updateReviewService,
  deleteReviewService,
};
