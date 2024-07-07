import Router from "express";
import PostRegisterFunc from "../../../Models/Ngo/postFunc/postFunc.js";

const router = Router();

router.post('/register',PostRegisterFunc);

export default router;