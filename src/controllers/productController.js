const { throwError } = require('../../utils');
const { productService } = require('../services');
const { listProductsService } = productService;

const listProductController = async (req, res) => {
  try {
    if (req?.query.category == null) {
    //   return res.status(200).json(listProductsService());
    }
    return res.status(200).json(listProductsService())
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  listProductController,
};
