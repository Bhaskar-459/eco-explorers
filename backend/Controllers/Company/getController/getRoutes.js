import Router from "express";
import getAllFunc from "../../../Models/Company/getFunc/getAllCompFunc.js";
const router = Router();

router.get('/getAllComp',getAllFunc);


export default router;