import Router from "express";
import getFunc from "../../../Models/People/getFunc/getFunc.js";
import getProfileFunc from "../../../Models/People/getFunc/getProfileFunc.js";

const router = Router();

// get all people data
router.get('/',getFunc);
router.get('/profile',getProfileFunc);


export default router;