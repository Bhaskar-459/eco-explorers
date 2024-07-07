import Router from "express";
import postFunc from "../../../Models/People/postFunc/postFunc.js";
import postPeopleLoginFunc from "../../../Models/People/postFunc/postLogin.js";
import postPeopleRegisterFunc from "../../../Models/People/postFunc/postRegister.js";

const router = Router();

router.post('/',postFunc);
router.post('/login',postPeopleLoginFunc);
router.post('/register',postPeopleRegisterFunc);

export default router;