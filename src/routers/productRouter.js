const express = require('express');
// const { productController } = require('../controllers');
// const {

// } = productController;
const router = express.Router();

router.get('/list', productController);

module.exports = router;
