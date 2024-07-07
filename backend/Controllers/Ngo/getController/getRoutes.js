import Router from "express";
import getFunc from "../../../Models/Ngo/getFunc/getFunc.js";
import ngo from "../../../Database/Schemas/Ngo.js";

const router = Router();

const getNgoFunc = async (req,res) => {
    const Ngo = await ngo.find();
    res.json(Ngo);
}

router.get('/',getFunc);
router.get('/getNgo',getNgoFunc);


// router.get('/getNgo',getNgoFunc);
// router.get('/profile',getProfileFunc);



export default router;