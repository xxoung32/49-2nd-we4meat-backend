const { throwError } = require('../../utils');
const { paymentService } = require('../services');
const {walletRechargeService, walletDeductionService, getOrderlistService,getWalletBalanceService} = paymentService;



// 1. 쿼리스트링에 있는 오더 넘버를 확인하여 쿼리문으로  오더 정보 가져오기..
// 2. 오더 주문 가져온 후 user_id와 토큰값 확인하여 사용자가 맞는지 확인
const checkAmountController = async(req,res,next) => {
  try{
    const { id } = req.user;
    const orderAmount = await getOrderlistService(totalAmount, id)
    const walletCredit = await getWalletBalanceService(credit, id);
    if(!walletCredit){
      throwError(400, '지갑을 찾을 수 없습니다.')
    }if (walletCredit < orderAmount)
    {throwError(400, '잔액이 부족합니다.');}
    return res.status(200).json({"적립금 잔액": walletCredit, "주문금액" : orderAmount})
  } catch (err) {
    console.error
    next(err);
  }
};

const walletDeductionController = async(req, res, next) => {
  try {
    const{ id } = req.user
    const itemPayment = await walletDeductionService(orderAmount, id)
    return res.status(200).json({"차감완료하였습니다."})
  } catch (error) {
    console.error
    next(err)
  }
}

const walletRechargeController = async(req, res, next) => {
  try {
    const{ id } = req.user
    const chargeAmount = req.body
    const walletNewCredit = await walletRechargeService(chargeAmount, id)
    if(!chargeAmount){
      throwError(400, '충전금액 찾을수 없습니다.')
    }if (!walletNewCredit)  
    {throwError(400, '충전오류.');}
    return res.status(200).json({"적립 총 금액: walletNewCredit "})
  }catch (error) {
    console.error
    next(err)
  }
}
// 4. 쿼리스트링에 있는 월렛을 확인하여 쿼리문으로  지갑 정보 가져오기..
// 6. 지갑의 남은 금액을 프론트로 전달  ( 그러면 프론트에서 두 금액 확인 후 금액이 넉넉하면)

// 5. 지갑을 가져온 후 user_id와 uuid 토큰값 확인하여 사용자가 맞는지 확인 (안함 ㅅㄱ)

// 7. 사용자가 다음 단계를 누르면 uri  변경  --> '/purchasecomplete/payment=id',
// 8. '/purchasecomplete =>페이먼트 테이블을 생성, 
// const decreaseCredit = async(req, res,next) => {
//   try {
//     const { amount } = req.body.amount;
//     const { customer_id } = req.userId;
//      const newPurchase = await dataSource.query(`
//     INSERT INTO payment (amount, customer) VALUES("${amount}", "${customer_id}") `);

//     return res.status(201).json({message : "new post create purchase"});
//   }catch (err){
//     console.log(err);
//   }
// }

