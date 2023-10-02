const { throwError } = require('../../utils/throwError.js');
const { cartsService } = require('../services');
const {insertCartsService,
  getCarstByCustomerIdService,
   deleteCartByIdService,
} = cartsService

//장바구니 생성
const insertCartsController = async (req, res) => {
  try {
    console.log("1.createCarts controller connect")//레이어드 패턴 연결확인
    const customerId = req.body.customerId
    const { productId, quantity } = req.body.products[0]
    console.log(req.body.products.length, 'body legnth')
    // console.log(productId, "제품 아이디라고");
    // console.log(quantity, "제품 수량이라고");
    //필수값 확인하기
    if (!customerId || !productId || !quantity) throwError(400, "필수 필드를 확인해주세요");
    //Business logic
    console.log("장난하지 말고 되라고", await insertCartsService(customerId, productId, quantity))
    await insertCartsService(customerId, productId, quantity)
    console.log("4.controller file after create carts service function call")
    return res.status(201).json({ message: "Cart inserted successfully" });

  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 400).json({ "message": error.message });
  }
};

//장바구니 목록 조회
const getCartsByCustomerIdController = async (req, res) => {
  try {
    console.log("1.getCarts by id controller connected")//레이어드 패턴 연결확인
    const customersId = req.params.id;
    //필수값 확인하기
    if (!customersId) {
      throwError(400, "고객 Id가 없습니다")
    }

    //Business logic
    const getCartsList = await getCarstByCustomerIdService(customersId)
    console.log("4.controller file after get carts service function call");
    return res.status(200).json({ getCartsList });
  }
  catch (error) {
    console.log(error);
    return res.status(error.statusCode || 400).json({ "message": error.message });
  }
}

//장바구니 삭제
const deleteCartByIdController = async (req, res) => {
  try {
    console.log("1.delete carts by id controller connected")//레이어드 패턴 연결 확인
    const cartId = req.query.id; //====> query string 소헌님꺼 참고했는데 통신 실패함.....
    const customer_id = req.query.customer_id;
    //Error
    if (!cartId || !customer_id) {
      throwError(400, "cartId와 customer_id가 없습니다")
    }
    //business logic
    await deleteCartByIdService(cartId, customer_id);
    console.log("4.controller file after update carts delete service function call");//레이어드 패턴 연결 확인
    return res.status(201).json({ message: "Cart delete successfully" })
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 400).json({ "message": error.message });

  }
}


module.exports = {
  insertCartsController,
  getCartsByCustomerIdController,
  deleteCartByIdController
}




