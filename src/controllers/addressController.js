const { addressService } = require('../services');

const getAddressController = async (req, res) => {
  const userId = req.user.id;
  const getAddressController =
    await addressService.getOrderAddressService(userId);
  res.status(200).json({ getAddressController });
};

module.exports = {
  getAddressController,
};
