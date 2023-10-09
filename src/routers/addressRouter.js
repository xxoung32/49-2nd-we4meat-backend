const express = require('express');
const { verifyToken } = require('../../middlewares');
const { addressController } = require('../controllers');
const router = express.Router();

router.get('/', verifyToken, addressController.getAddressController);
// router.post('/create', verifyToken);
// router.patch('/delete', verifyToken)

module.exports = router;
