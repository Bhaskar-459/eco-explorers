import Router from "express";
import putFunc from "../../../Models/People/putFunc/putFunc.js";

const router = Router();

router.put('/',putFunc);

export default router;