import Router from "express";
import postFunc from "../../../Models/Company/postFunc/postFunc.js";
import PostRegisterFunc from "../../../Models/Company/postFunc/postCompRegister.js";
import postLoginFunc from "../../../Models/Company/postFunc/postCompLogin.js";
import postCompSellCredits from "../../../Models/Company/postFunc/postCompSellCredits.js";
import postCompBuyCredits from "../../../Models/Company/postFunc/postCompBuyCredits.js";
import postCompVerifyCredits from "../../../Models/Company/postFunc/PostCompVerifyCredits.js";
import postCompGcpRegister from "../../../Models/Company/postFunc/postCompGcpRegister.js";
const router = Router();

router.post('/',postFunc);
router.post('/login',postLoginFunc);
router.post('/register',PostRegisterFunc);
router.post('/gcpRegister',postCompGcpRegister);
router.post('/verifyCredits',postCompVerifyCredits);
router.post('/sellCredits',postCompSellCredits);
router.post('/buyCredits',postCompBuyCredits);
export default router;