import Router from "express";
import getFunc from "../../../Models/People/getFunc/getFunc.js";
import getProfileFunc from "../../../Models/People/getFunc/getProfileFunc.js";
import getTransactionHistoryFunc from "../../../Models/People/getFunc/getTransactionHistory.js";

const router = Router();

// get all people data
router.get('/',getFunc);
router.get('/profile/:email',getProfileFunc);
router.get('/getTransactionHistory/:email',getTransactionHistoryFunc)


export default router;