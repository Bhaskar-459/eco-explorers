import Router from "express";
import postFunc from "../../../Models/People/postFunc/postFunc.js";
import postPeopleLoginFunc from "../../../Models/People/postFunc/postLogin.js";
import postPeopleRegisterFunc from "../../../Models/People/postFunc/postRegister.js";
import postSellCreditsFunc from "../../../Models/People/postFunc/postSellCredits.js";
import postBuyCreditsFunc from "../../../Models/People/postFunc/PostBuyCreditsFunc.js";

const router = Router();

router.post('/',postFunc);
router.post('/login',postPeopleLoginFunc);
router.post('/register',postPeopleRegisterFunc);
router.post('/sellCredits',postSellCreditsFunc);
router.post('/buyCredits',postBuyCreditsFunc);

export default router;