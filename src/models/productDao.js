const { dataSource } = require('./dataSource');

const listProductsDao = async (categoryName) => {
    const products = await dataSource.query(
        `SELECT c.name AS category,
            p.product_name AS productName,
            p.product_img AS productImg,
            p.price AS price,
            p.weight AS weight,
            p.desc AS description,
            i.quantity AS quantity 
        FROM products p
        LEFT JOIN categories c 
        ON p.category_id = c.id 
        LEFT JOIN product_inventories i 
        ON p.inventory_id = i.id 
        WHERE c.name = ?`
,[categoryName]
    );
    return products
};
/*
(`SELECT c.name AS category,
    p.product_name AS productName,
    p.product_img AS productImg,
    p.price AS price,
    p.weight AS weight,
    p.`desc` AS description,
    i.quantity AS quantity 
FROM products p
LEFT JOIN categories c 
ON p.category_id = c.id 
LEFT JOIN product_inventories i 
ON p.inventory_id = i.id 
WHERE c.name = ?`
,[categoryName])
*/

module.exports = {
    listProductsDao,
};