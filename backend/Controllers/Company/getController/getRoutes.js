import Router from "express";
import getAllFunc from "../../../Models/Company/getFunc/getAllCompFunc.js";
import getRegisteredFunc from "../../../Models/Company/getFunc/getRegisteredFunc.js";
const router = Router();

router.get('/getAllComp',getAllFunc);
router.get('/registeredComp',getRegisteredFunc);


export default router;