const { orderService } = require('../services');
const { getOrderService } = orderService;
const { throwError } = require('../utils');

const createOrderController = async (req, res) => {
  try {
    const { id } = req.userId;
    const { name, phonenumber, email, address } = req.body;

    // 필수 값 확인
    if (!name || !phonenumber || !email || !address)
      throwError(400, 'missing name, phonenumber,email, address');
  } catch (err) {
    console.log(err);
    getOrderService();
    return res.staus(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = {
  createOrderController,
};
