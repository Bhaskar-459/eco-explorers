import { Router } from "express";

import getRoutes from "../Controllers/Company/getFunc/getRoutes.js";
import postRoutes from "../Controllers/Company/postFunc/postRoutes.js";
import putRoutes from "../Controllers/Company/putFunc/putRoutes.js";
import deleteRoutes from "../Controllers/Company/DeleteFunc/deleteRoutes.js";


const router = Router();

router.use('/get',getRoutes);
router.use('/post',postRoutes);
router.use('/put',putRoutes);
router.use('/delete',deleteRoutes);

export default router;