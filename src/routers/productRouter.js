const express = require('express');
const { productController } = require('../controllers');
const { listProductController } = productController;
const router = express.Router();

router.get('/', listProductController);

module.exports = router;
