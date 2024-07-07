import Router from "express";
import getFunc from "../../../Models/Ngo/getFunc/getFunc.js";

const router = Router();

router.get('/',getFunc);

export default router;