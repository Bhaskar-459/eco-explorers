import Router from "express";
import PutFunc from "../../../Models/Ngo/putFunc/putFunc.js";

const router = Router();

router.put('/',PutFunc);

export default router;