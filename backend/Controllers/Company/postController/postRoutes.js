import Router from "express";
import postFunc from "../../../Models/Company/postFunc/postFunc.js";
import PostRegisterFunc from "../../../Models/Company/postFunc/postCompRegister.js";
import postLoginFunc from "../../../Models/Company/postFunc/postCompLogin.js";
const router = Router();

router.post('/',postFunc);
router.post('/login',postLoginFunc);
router.post('/register',PostRegisterFunc);
export default router;