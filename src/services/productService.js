const { productDao } = require('../models');
const { listProductsDao } = productDao;

const listProductsService = async (categoryId) => {
  return listProductsDao(categoryId);
};

module.exports = {
  listProductsService,
};
