const { throwError } = require('../../utils');
const { reviewService } = require('../services');
const { getReviewService, createReviewService, updateReviewService, deleteReviewService } = reviewService;

const getReviewController = async (req, res, next) => {
    try {
        const userId  = req.user.id;
        const productId = req.query.tab;
        if (!productId) throwError(400, 'NO_PRODUCT_ID');
        return res.status(200).json({
            message: 'REVIEW_CALLED',
            data: await getReviewService(userId, productId),
          });
    } catch (err) {
        console.error(err);
        next(err);
    };
};

const createReviewController = async (req, res, next) => {
    try {
        const userId  = req.user.id;
        const {title, body, imgUrl } = req.body;
        if (!userId) throwError(400, "KEY_ERROR")
        if (!body) throwError(400, 'NO_CONTENT');
        if (!title) throwError(400, "NO_TITLE");
        return res.status(201).json(await createReviewService(userId, title, body, imgUrl))
    } catch (err) {
        console.error(err);
        next(err);
    }
};

const updateReviewController = async (req, res, next) => {
    try {
        const userId  = req.user.id;
        const { reviewId, title, body, imgUrl } = req.body;
        if (!userId || !reviewId) throwError(400, "KEY_ERROR")
        if (!body) throwError(400, 'NO_CONTENT');
        if (!title) throwError(400, "NO_TITLE");
        return res.status(201).json({message : await updateReviewService(userId, reviewId, title, body, imgUrl)})
    } catch (err) {
        console.error(err);
        next(err);
    }
};

const deleteReviewController = async (req, res, next) => {
    try {
        const userId  = req.user.id;
        const { reviewId } = req.body;
        if (!reviewId) throwError(400, 'KEY_ERROR');
        return res.status(200).json({ message : await deleteReviewService(userId, reviewId)})
    } catch (err) {
        console.error(err);
        next(err);
    }
};

module.exports = {
    getReviewController,
    createReviewController,
    updateReviewController,
    deleteReviewController,
};
