import Router from "express";
import deleteFunc from "../../../Models/GreenCredits/deleteFunc/deleteFunc.js";

const router = Router();
router.delete('/',deleteFunc);

export default router;