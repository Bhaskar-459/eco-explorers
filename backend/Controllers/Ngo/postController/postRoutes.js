import Router from "express";
import PostFunc from "../../../Models/Ngo/postFunc/postFunc.js";

const router = Router();

router.post('/',PostFunc);

export default router;