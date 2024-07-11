import Router from "express";

import postUpdateValueFunc from "../../../Models/greenCredits/postFunc/postUpdateValueFunc.js";

const router = Router();

router.post('/updateValue',postUpdateValueFunc);

export default router;