import Router from "express";

import postFunc from "../../../Models/GreenCredits/postFunc/postFunc.js";

const router = Router();

router.post('/',postFunc);

export default router;