const { throwError } = require('../../utils');
const { paymentService } = require('../services');
const {walletRechargeService, walletDeductionService, getOrderlistService,getWalletBalanceService} = paymentService;



// 1. 쿼리스트링에 있는 오더 넘버를 확인하여 쿼리문으로  오더 정보 가져오기..
// 2. 오더 주문 가져온 후 user_id와 토큰값 확인하여 사용자가 맞는지 확인
const checkAmountController = async(req,res,next) => {
  try{
    const { id } = req.user;
    const orderAmount = await getOrderlistService(totalAmount, id)
    const walletCredit = await getWalletBalanceService(id);
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
    const chargeAmount = req.body.credit
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

module.exports = {
  checkAmountController,
  walletDeductionController,
  walletRechargeController,
  chargeAmount,
};