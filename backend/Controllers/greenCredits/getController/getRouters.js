import Router from "express";
import getCurrentValueFunc from "../../../Models/greenCredits/getFunc/getCurrentValueFunc.js";
import getSellListFunc from "../../../Models/greenCredits/getFunc/getSellListFunc.js";
import getBuyListFunc from "../../../Models/greenCredits/getFunc/getBuyListFunc.js";

const router = Router();
router.get('/getValue',getCurrentValueFunc);
router.get('/sellList',getSellListFunc);
router.get('/buyList',getBuyListFunc);

export default router;