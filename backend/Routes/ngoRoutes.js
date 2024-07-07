import { Router } from "express";

import getRoutes from "../Controllers/Ngo/getFunc/getRoutes.js";
import postRoutes from "../Controllers/Ngo/postFunc/postRoutes.js";
import putRoutes from "../Controllers/Ngo/putFunc/putRoutes.js";
import deleteRoutes from "../Controllers/Ngo/DeleteFunc/deleteRoutes.js";

const router = Router();

router.use('/get',getRoutes);
router.use('/post',postRoutes);
router.use('/put',putRoutes);
router.use('/delete',deleteRoutes);

export default router;