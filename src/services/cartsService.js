const { cartsDao } = require('../models');
// const { dataSource } = require('../models/dataSource');
const { insertCartsDao,
    deleteExistingCartsDao,
    getCartsByCustomerIdDao,
    deleteCartByIdDao } = cartsDao;
    
//카트 생성하기    
const insertCartsService = async (customerId, products) => {
    await deleteExistingCartsDao(customerId) //기존 카트 삭제하기
    async function cartUpdate () {
    const newCartList = products
    console.log("typeof ", typeof newCartList);
    console.log("newCartList: ",newCartList)

        for (let i = 0; i < newCartList.length; i++) {
            const productItem = newCartList[i];
            console.log(productItem)
            const { productId, quantity } = productItem || {};
            // productId와 quantity 변수를 여기서 사용
            console.log(productId, quantity);
            await insertCartsDao(customerId, productId, quantity)
        }
    }
    await cartUpdate() 
    return "INSERT COMPLITED."
}
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

