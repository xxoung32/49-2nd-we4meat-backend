const { CallTracker } = require('assert');
const { throwError } = require('../../utils/throwError.js');
const { cartsService } = require('../services');


const createCartsController = async (req, res) => {
  try {
    console.log("1.createCarts controller connect")
    const createCarts = req.body
    const { customer_id, product_id, quantity } = createCarts;
    //필수값
    if (!customer_id || !product_id || !quantity) {
      throwError(400, "Undefined");
    }
    //Business logic
    await cartsService.createCarts(customer_id, product_id, quantity)
    console.log("4.controller file after carts service function call")
    return res.status(201).json({ message: "createCart Success" });

  } catch (error) {
    console.log(error)
    return res.status(error.statusCode).json({ "message": error.message });
  }
};

module.exports = {
  createCartsController
}




