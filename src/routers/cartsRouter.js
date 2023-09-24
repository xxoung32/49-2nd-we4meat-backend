const express = require('express');
const { verifyToken } = require('../../middleware');
const { cartsController } = require('../controllers');
const {
createCartsController,
// getCartsController,
// updateCartsController,

} = cartsController;
const router = express.Router();


router.post('/create', verifyToken, createCartsController);
// router.post('/create', createCartsController);  ====> 토큰 postman에 적용하는 법 몰라서 통신을 위해 사용함
// router.get('/', verifyToken, getCartsController);
// router.patch('/', verifyToken, updateCartsController);

module.exports = router;