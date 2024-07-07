import Router from "express";
import deleteFunc from "../../../Models/People/deleteFunc/deleteFunc.js";

const router = Router();

router.delete('/',deleteFunc);

export default router;