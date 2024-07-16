import Router from "express";
import getFunc from "../../../Models/Ngo/getFunc/getFunc.js";
import getTransactionHistoryFunc from "../../../Models/Ngo/getFunc/getTransactionHistoryFunc.js";
import getProfileFunc from "../../../Models/Ngo/getFunc/getProfileFunc.js";

const router = Router();



router.get('/',getFunc);
router.get('/getTransactionHistory/:email',getTransactionHistoryFunc);
router.get('/getProfile/:email',getProfileFunc);



// router.get('/getNgo',getNgoFunc);
// router.get('/profile',getProfileFunc);



export default router;