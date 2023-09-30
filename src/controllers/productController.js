const { throwError } = require('../../utils');
const { productService } = require('../services');
const { listProductsService } = productService;

const listProductController = async (req, res, next) => {
  try {
    if (req?.query.category == null) throwError(400, 'NO_CATEGORIES');
    console.log(req.query.category);
    categoryName = req.query.category;
    return res.status(200).json({
      message: 'QUERY_SUCCESSFUL',
      data: await listProductsService(categoryName),
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  listProductController,
};
