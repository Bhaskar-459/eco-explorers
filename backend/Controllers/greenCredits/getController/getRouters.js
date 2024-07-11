import Router from "express";
import getCurrentValueFunc from "../../../Models/greenCredits/getFunc/getCurrentValueFunc.js";

const router = Router();
router.get('/getValue',getCurrentValueFunc);

export default router;