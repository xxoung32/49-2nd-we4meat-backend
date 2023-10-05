const { reviewDao } = require('../models');
const { getReviewDao, createReviewDao, updateReviewDao, deleteReviewDao } = reviewDao;

const getReviewService = async (userId, productId) => {
  return getReviewDao(userId, productId);
};
const createReviewService = async (userId, title, body, imgUrl) => {
  createReviewDao(userId, title, body, imgUrl);
  return 'REVIEW_CREATED';
};
const updateReviewService = async (userId, productId, title, body, imgUrl) => {
  updateReviewDao(userId, productId, title, body, imgUrl);
  return 'REVIEW_UPDATED';
};
const deleteReviewService = async (userId, reviewId) => {
  deleteReviewDao(userId, reviewId);
  return 'REVIEW_DELETED';
};

module.exports = {
  getReviewService,
  createReviewService,
  updateReviewService,
  deleteReviewService,
};
