const express = require('express');
const { verifyToken } = require('../../middleware');
const { cartsController } = require('../controllers');
const {
insertCartsController,
getCartsByCustomerIdController,
deleteCartByIdController
} = cartsController;
const router = express.Router();

// ====> 토큰 postman에 적용하는 법 몰라서 통신을 위해 verrfyToken 함수 뺐음
router.post('/create', insertCartsController);  
router.get('/:id', getCartsByCustomerIdController);
router.patch('/delete', deleteCartByIdController);

// ====> 토큰 발행 후 사용할 routers
// router.post('/create', verifyToken, insertCartsController);
// router.get('/:id', verifyToken, getCartsByCustomerIdController);
// router.patch('/delete',verifyToken, deleteCartByIdController);



module.exports = router;