import Router from "express";

import putFunc from "../../../Models/GreenCredits/putFunc/putFunc.js";

const router = Router();

router.put('/',putFunc);

export default router;