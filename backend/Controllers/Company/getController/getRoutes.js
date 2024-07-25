import Router from "express";
import getAllFunc from "../../../Models/Company/getFunc/getAllCompFunc.js";
import getRegisteredFunc from "../../../Models/Company/getFunc/getRegisteredFunc.js";
import getTransactionHistoryFunc from "../../../Models/Company/getFunc/getTransactionHistoryFunc.js";
const router = Router();

router.get('/getAllComp',getAllFunc);
router.get('/registeredComp',getRegisteredFunc);
router.get('/getTransactionHistory/:email',getTransactionHistoryFunc);


export default router;