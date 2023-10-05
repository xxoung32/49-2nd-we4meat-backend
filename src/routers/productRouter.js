const express = require('express');
const { productController } = require('../controllers');
const { listProductController, productDetailController } = productController;
const router = express.Router();

router.get('/', listProductController);
router.get('/detail', productDetailController);

module.exports = router;
