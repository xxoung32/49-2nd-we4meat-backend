const { dataSource } = require('./dataSource');

const getAllProductsDao = async () => {
    const [] = await dataSource.query(
        `
        SELECT * FROM Products;
        `
    )
};

module.exports = {
    getAllProductsDao,
};