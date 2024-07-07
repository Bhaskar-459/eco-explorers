import Router from "express";
import getFunc from "../../../Models/People/getFunc/getFunc.js";

const router = Router();

router.get('/',getFunc);

export default router;