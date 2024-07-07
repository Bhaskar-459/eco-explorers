import Router from "express";
import postFunc from "../../../Models/People/postFunc/postFunc.js";

const router = Router();

router.post('/',postFunc);

export default router;