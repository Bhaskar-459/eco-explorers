import Router from "express";
import getFunc from "../../../Models/Ngo/getFunc/getFunc.js";
import getTransactionHistoryFunc from "../../../Models/Ngo/getFunc/getTransactionHistoryFunc.js";

const router = Router();



router.get('/',getFunc);
router.get('/getTransactionHistory',getTransactionHistoryFunc);


// router.get('/getNgo',getNgoFunc);
// router.get('/profile',getProfileFunc);



export default router;