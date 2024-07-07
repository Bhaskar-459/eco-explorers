import { Router } from "express";
import getRoutes from "../Controllers/People/getFunc/getRoutes.js";
import postRoutes from "../Controllers/People/postFunc/postRoutes.js";
import putRoutes from "../Controllers/People/putFunc/putRoutes.js";
import deleteRoutes from "../Controllers/People/DeleteFunc/deleteRoutes.js";


const router = Router();

router.use('/get',getRoutes);
router.use('/post',postRoutes);
router.use('/put',putRoutes);
router.use('/delete',deleteRoutes);

export default router;