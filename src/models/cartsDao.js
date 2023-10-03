const { dataSource } = require('./dataSource');

//장바구니  mk2는 생성이지만, 빈 카트 생성은 회원 가입때 할 거에요...
// 그러니까, 실질적으로, 우리는 카트를 통으로 업데이트 하는 거에요. 그러면, 통신 횟수를 줄일 수 있으니까.
// 이게 정석은 아닐 수도 있어요. 그렇지만, 원래 개발은 합당한 이유가 있으면 그렇게 해도 되요.
// 문제는 실제로 서비스가 제공되고 있을때 벌어지고, 겪으면, 그때 우리가 실수를 한거구나... 하고 배우고, 정석으로 돌아갈 수 도 있어요.
// 그러니까 작성했던 코드는, 다른데에 잘 저장해둬요. :)
// 그냥 프론트에서 전달하는 모든 데이터는 뭐가 있을지 잘 생각해 보시고, 저건 아마 req.body에 넣어서 달라고 요청을 해야해요.
// 다시 정리하면, 프론트에서 전달받아야 하는 정보를 지금 우리 db와 비교하여 잘 디자인하시고 오늘 카트기능은 마무리 할 수 있으면 좋을것 같아요. 
// 리뷰는 그냥 제가 할께요.

// 그리고 어떻게 하지... 라고 고민하면... 어려운데, 아까 우리 대화 하는것 처럼, 뭣대운에 이건 달될것 같고, 이런 고민형식으로 문제를 해결해 나가면 더 좋습니다.
// 가능하면, 포스맨으로 통신 성공한다음에... 포스트맨 리턴 값을 프론트에 전달할수 있을만한거... 정리해주시면 좋을것 같아요. 

// 장바구니 최종 업데이트(생성)
const insertCartsDao = async (customerId, productId, quantity) => {
    console.log("3.insert carts dao connected"); // 레이어드 패턴 연결확인
    const insertCartsData = await dataSource.query(`
    INSERT INTO carts (customer_id, product_id, quantity)
    VALUES (?, ?, ?)`,
        [customerId, productId, quantity ] //배열로 전달하기
    );
    console.log("insertCartsdata: ", insertCartsData); //데이터 확인
    return insertCartsData;
};


// 장바구니 기존 카트 삭제하기
const deleteExistingCartsDao = async (customerId) => {
    console.log("3.delete existing cart dao connected");//레이어드 패턴 연결확인
    const existingCartData = await dataSource.query(`
        DELETE 
        FROM carts
        WHERE customer_id = ?
    `,[ customerId ])
    console.log("delete exsiting cart: ", existingCartData)
    return existingCartData;
};

//장바구니 목록 조회 데이터 ====> 통신 완료
const getCartsByCustomerIdDao = async (customersId) => {
    console.log("3. getCartsByIdDao connected"); // 레이어드 패턴 연결확인
    const getCartsData = await dataSource.query(`
        SELECT c.id, p.product_name, p.product_img, p.weight, cart.quantity, p.price, (cart.quantity * p.price) AS price 
        FROM customers AS c 
        JOIN carts AS cart ON c.id = cart.customer_id 
        JOIN products AS p ON cart.product_id = p.id 
        WHERE cart.status = 1 AND c.id = ? `,
        [customersId] // 배열로 전달하기
    );
    console.log("getCartsDataById: ", getCartsData); //데이터 확인
    return getCartsData;
};

// //장바구니 상태변경(2는 주문상태 3은 구매완료) =====> order함수를 불러오든 아님 order에서 처리하든 해야될 거 같아서 일단 보류함
// const cartsStatusDao = async () => {
//     console.log("3. cartsStatusDao connected"); // 레이어드 패턴 연결확인
//     const cartsStatusData = await dataSource.query(`

//     UPDATE carts
//     SET staus =2`,
//     );
// }


//장바구니 삭제  ====> 통신 실패
const deleteCartByIdDao = async (product_id, customer_id) => {
    console.log("3. deleteCartsByIdDao connected");//레이어드 패턴 연결확인
    const deleteCartsData = await dataSource.query(`
    UPDATE carts
    SET status = 3
    WHERE product_id = ? AND customer_id = ?
    `, [product_id, customer_id]); // 배열로 전달하기
    return deleteCartsData
}




module.exports = {
    insertCartsDao,
    getCartsByCustomerIdDao,
    deleteCartByIdDao,
    deleteExistingCartsDao
};
