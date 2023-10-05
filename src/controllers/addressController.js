const { addressService } = require('../services');

const getAddressController = async (req, res) => {
  const userId = req.user.id;
  const getAddressController =
    await addressService.getOrderAddressService(userId);
  res.status(200).json({ getAddressController });
};

// const createAddressController = async (req, res) => {
// 	const { address } = req.body
// 	const userId = req.user.id

// 	const insertId = await addressService.createOrderAddressService(address, userId)

// 	res.status(201).json({ insertId })
// })

module.exports = {
  getAddressController,
};
