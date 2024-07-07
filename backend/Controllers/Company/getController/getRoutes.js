import Router from "express";
import getFunc from "../../../Models/Company/getFunc/getFunc.js";
const router = Router();

router.get('/',getFunc);

export default router;