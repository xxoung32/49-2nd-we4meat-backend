const { dataSource } = require('../models/dataSource') ;
const { cartsDao } = require('../models');
const { throwError } = require('../../utils/throwError.js');
const { createCartsDao } = require('../models/cartsDao');
// 장바구니 생성
const createCarts = async (customer_id, product_id, quantity) => {
    console.log("2.createCarts service connected")
    const newCart = cartsDao.createCartsDao(customer_id, product_id, quantity);
    return newCart
   };

module.exports = {
    createCarts
}



