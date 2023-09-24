const { QueryRunnerAlreadyReleasedError } = require('typeorm');
const { dataSource } = require('./dataSource');

//장바구니 생성 데이터
const createCartsDao = async (customer_id, product_id, quantity) => {
    console.log("3.createCarts Dao connected")
    const createCartsData = await dataSource.query(`
    INSERT INTO carts (customer_id, product_id, quantity)
    VALUES (?, ?, ?)`,
    [customer_id, product_id, quantity]
    );
    console.log("createCartsdata: ", createCartsData)
    return createCartsData;
}
module.exports = {
    createCartsDao };

















// const createCartsDao = async (
//     id,
//     customer_id,
//     product_id,
//     quantity,
// )