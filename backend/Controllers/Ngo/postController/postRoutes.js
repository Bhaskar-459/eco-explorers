import Router from "express";
import PostRegisterFunc from "../../../Models/Ngo/postFunc/postRegister.js";
import PostLoginFunc from "../../../Models/Ngo/postFunc/postLogin.js";
import PostsellCreditsFunc from "../../../Models/Ngo/postFunc/PostSellCredits.js";
import postVerifyFunc from "../../../Models/Ngo/postFunc/postVerify.js";
const router = Router();

router.post('/register',PostRegisterFunc);
router.post('/login',PostLoginFunc);
router.post('/sellCredits',PostsellCreditsFunc);
router.post('/verify',postVerifyFunc);

export default router;