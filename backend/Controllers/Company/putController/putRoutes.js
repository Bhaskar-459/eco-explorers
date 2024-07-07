import Router from "express";
import putFunc from "../../../Models/Company/putFunc/putFunc.js";

const router = Router();

router.put('/',putFunc);

export default router;