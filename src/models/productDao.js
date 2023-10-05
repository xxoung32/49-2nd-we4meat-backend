const { dataSource } = require('./dataSource');

const listProductsDao = async (categoryName) => {
  const products = await dataSource.query(
    `SELECT p.id AS productId,
        p.product_name AS productName,
        c.name AS productCategory,
        p.product_img AS productImg,
        p.price AS price,
        p.weight AS weight,
        i.quantity AS quantity
    FROM products p
    LEFT JOIN categories c 
    ON p.category_id = c.id 
    LEFT JOIN product_inventories i 
    ON p.inventory_id = i.id 
    WHERE c.name = ?`,
    [categoryName],
  );
  return products;
};

const productDetailDao = async (productId) => {
  const detail = await dataSource.query(
    `SELECT p.id AS productId,
        p.product_name AS productName,
        p.product_img AS productImg,
        p.price AS price,
        p.weight AS weight,
        p.desc AS description
    FROM products p
    WHERE p.id = ?`,
    [productId],
  );
  return detail
};

module.exports = {
  listProductsDao,
  productDetailDao,
};
