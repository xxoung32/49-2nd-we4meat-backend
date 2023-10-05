const { productDao } = require('../models');
const { listProductsDao, productDetailDao } = productDao;

const listProductsService = async (categoryName) => {
  return listProductsDao(categoryName);
};

const productDetailService = async (productId) => {
  return productDetailDao(productId);
};

module.exports = {
  listProductsService,
  productDetailService,
};
