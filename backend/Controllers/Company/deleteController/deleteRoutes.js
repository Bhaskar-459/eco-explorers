import Router from "express";
import DeleteFunc from "../../../Models/Company/deleteFunc/deleteFunc.js";

const router = Router();

router.delete('/',DeleteFunc);

export default router;