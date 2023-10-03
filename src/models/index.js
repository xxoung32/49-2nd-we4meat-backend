const {
    insertCartsDao,
    deleteExistingCartsDao,
    getCartsByCustomerIdDao,
    deleteCartByIdDao } = require('./cartsDao');

module.exports = {
    cartsDao: {
        insertCartsDao,
        deleteExistingCartsDao,
        getCartsByCustomerIdDao,
        deleteCartByIdDao
    },
};