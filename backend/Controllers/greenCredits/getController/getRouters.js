import Router from "express";
import getFunc from "../../../Models/GreenCredits/getFunc/getFunc.js";

const router = Router();
router.get('/get',getFunc);

export default router;