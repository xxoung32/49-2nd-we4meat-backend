const { addressDao } = require('../models');
const { dataSource } = require('../models/dataSource');

const getOrderAddressService = async (userId) => {
  const getaddress = await addressDao.getAddressDao(userId);
  console.log(getaddress);
  if (!getaddress) return 'NO_ADDRESS';
  return getaddress;
};

// const createOrderAddressService = async (addressId, userId) => {
//   return await addressDao.postOrderAddressService(addressId, userId);
// };

// const deleteOrderAddressService = async (addressId, userId) => {
//   return await addressDao.deleteOrderAddressService(addressId, userId);
// };

module.exports = {
  getOrderAddressService,
  // deleteOrderAddressService,
  // createOrderAddressService,
};
