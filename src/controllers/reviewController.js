const { throwError } = require('../../utils');
const { reviewService } = require('../services');
const { createReviewService, updateReviewService, deleteReviewService } = reviewService;

const getReviewController = async (req, res, next) => {
    return
}

const createReviewController = async (req, res, next) => {
    try {
        const { id } = req.user;
        const { body, productId } = req.body;
        if (!body) throwError(400, 'NO_COMMENT');
        return res.status(201).json(await createReviewService(id, { body, productId }))
    } catch (err) {
        console.error(err);
        next(err);
    }
};

const updateReviewController = async (req, res, next) => {
    try {
        const { id } = req.user;
        const { body, reviewId } = req.body;
        if (!body || !reviewId) throwError(400, 'KEY_ERROR');
        return res.status(201).json({message : await updateReviewService(id, req.body)})
    } catch (err) {
        console.error(err);
        next(err);
    }
};

const deleteReviewController = async (req, res, next) => {
    try {
        const { id } = req.user;
        const { reviewId } = req.body;
        if (!reviewId) throwError(400, 'KEY_ERROR');
        return res.status(200).json({ message : await deleteReviewService(id, reviewId)})
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
