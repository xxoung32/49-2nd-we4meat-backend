const { productDao } = require('../models');
const { listProductsDao } = productDao;

const listProductsService = async (categoryName) => {
  return listProductsDao(categoryName);
};

module.exports = {
  listProductsService,
};
