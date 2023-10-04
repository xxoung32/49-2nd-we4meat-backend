const { addressDao } = require('../models');
const { dataSource } = require('../models/dataSource');

const getOrderAddressService = async (userId) => {
  const getaddress = await addressDao.getAddressDao(userId);
  console.log(getaddress);
  if (!getaddress) return 'NO_ADDRESS';
  return getaddress;
};

const createOrderAddressDao = async (addressId, userId) => {
  return await addressDao.postOrderAddressDao(addressId, userId);
};

const deleteOrderAddressDao = async (addressId, userId) => {
  return await addressDao.deleteOrderAddressDao(addressId, userId);
};

module.exports = {
  getOrderAddressService,
  deleteOrderAddressDao,
  createOrderAddressDao,
};
