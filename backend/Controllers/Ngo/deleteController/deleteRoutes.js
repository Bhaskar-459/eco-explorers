import Router from "express";
import deleteFunc from "../../../Models/Ngo/deleteFunc/deleteFunc.js";

const router = Router();

router.delete('/',deleteFunc);

export default router;