const express = require('express');
const { reviewController } = require('../controllers');
const {
  getReviewController,
  createReviewController,
  updateReviewController,
  deleteReviewController,
} = reviewController;
const { verifyToken } = require('../../middlewares');
const router = express.Router();

router.get('/', getReviewController);
router.post('/', verifyToken, createReviewController);
router.patch('/', verifyToken, updateReviewController);
router.delete('/', verifyToken, deleteReviewController);

module.exports = router;
