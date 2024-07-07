import Router from "express";
import PostRegisterFunc from "../../../Models/Ngo/postFunc/postFunc.js";
import PostLoginFunc from "../../../Models/Ngo/postFunc/postLogin.js";
const router = Router();

router.post('/register',PostRegisterFunc);
router.post('/login',PostLoginFunc);

export default router;