import { Router } from "express";

import getRoutes from "../Controllers/Ngo/getController/getRoutes.js";
import postRoutes from "../Controllers/Ngo/postController/postRoutes.js";
import putRoutes from "../Controllers/Ngo/putController/putRoutes.js";
import deleteRoutes from "../Controllers/Ngo/deleteController/deleteRoutes.js";

const router = Router();

router.use('/get',getRoutes);
router.use('/post',postRoutes);
router.use('/put',putRoutes);
router.use('/delete',deleteRoutes);

export default router;