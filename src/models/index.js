const {
    insertCartsDao,
    getCartsByCustomerIdDao,
    deleteCartByIdDao } = require('./cartsDao');

module.exports = {
    cartsDao: {
        insertCartsDao,
        getCartsByCustomerIdDao,
        deleteCartByIdDao
    },
};