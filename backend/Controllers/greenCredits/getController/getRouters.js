import Router from "express";
import getCurrentValueFunc from "../../../Models/greenCredits/getFunc/getCurrentValueFunc.js";
import getSellListFunc from "../../../Models/greenCredits/getFunc/getSellListFunc.js";
import getBuyListFunc from "../../../Models/greenCredits/getFunc/getBuyListFunc.js";
import createGreenCredit from "../../../Models/greenCredits/postFunc/createGreenCredit.js";

const router = Router();
router.get('/getValue',getCurrentValueFunc);
router.get('/sellList',getSellListFunc);
router.get('/buyList',getBuyListFunc);

// post route
router.post('/create',createGreenCredit);

export default router;