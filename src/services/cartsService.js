const { dataSource } = require('../models/dataSource');
const { cartsDao } = require('../models');
const { insertCartsDao,
    getCartsByCustomerIdDao,
    deleteCartByIdDao, } = cartsDao;

// 장바구니 최종 업데이트(생성)
const insertCartsService = async (customerId, productId, quantity) => {
    console.log("2.createCarts service connected");//레이어드 패턴 연결확인

    //이미 최종적으로 저장 된 카트가 있고 다시 카트를 저장하는 경우
    //==> 1. 기존에 저장한 유저 아이디가 있는 지 확인
    const existingCustomerId = await dataSource.query(
        `
        SELECT id
        FROM carts
        WHERE customer_id = ? AND status = 1
        `,[customerId]
        );
    console.log("existingCustomerId: ", existingCustomerId)
    //==> 2. 있으면 기존의 유저아이디의 카트를 삭제 -> 카트아이디 삭제
    if (existingCustomerId.length > 0) {
        const deleteExistingCart = existingCustomerId[0].id;
        console.log("deleteExistingCart: ", deleteExistingCart)
        await dataSource.query(`DELETE FROM carts WHERE id = ?`, [deleteExistingCart]);
        console.log("delete exsiting cart: ", deleteExistingCart)
    }

//     //==> 3. 새롭게 만든 카트 저장 예) INSERT INTO carts VALUES(id, customerId, product, ...) VALUE( ?, ? , ? ,?,?);
    const newCartList = productId
    // const { customerId, productId, quantity } = newCartList
    const newCartListLength = newCartList
    console.log("newCartListLength: ", newCartListLength)
    for (let i = 0; i < newCartListLength; i++) {
        const productItem = newCartList[i]
        const { productId, quantity } = productItem || {}
        // const { customerId, productId, quantity } = newCartList[i]
        // await cartsDao.insertCartsDao(customerId, productId, quantity)
        await insertCartsDao(customerId, productId, quantity)
    }
    return "INSERT COMPLITED."
};

// 장바구니 목록 조회
const getCarstByCustomerIdService = async (customersId) => {
    console.log("2.getCarts by id service connected");//레이어드 패턴 연결확인
    const getCartsByCustomerId = await getCartsByCustomerIdDao(customersId);
    //장바구니가 비어있을 때 ====> 빈 배열로 반환하고 메세지 표시 "장바구니가 비었습니다"
    const getCartsByCustomerIdLength = getCartsByCustomerId.length
    if (getCartsByCustomerIdLength === 0) {
        return {
            data: [],
            message: "장바구니가 비었습니다"
        };
    };
    return getCartsByCustomerId
};
//장바구니 삭제
const deleteCartByIdService = async (id, customerId) => {
    console.log("2.delete cart by id service connected");//레이어드 패턴 연결확인
    const deleteCartByID = await deleteCartByIdDao(id, customerId)
    return deleteCartByID
};




module.exports = {
    insertCartsService,
    getCarstByCustomerIdService,
    deleteCartByIdService

};

