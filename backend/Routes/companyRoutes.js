import { Router } from "express";

import getRoutes from "../Controllers/Company/getController/getRoutes.js";
import postRoutes from "../Controllers/Company/postController/postRoutes.js";
import putRoutes from "../Controllers/Company/putController/putRoutes.js";
import deleteRoutes from "../Controllers/Company/deleteController/deleteRoutes.js";


const router = Router();

router.use('/get',getRoutes);
router.use('/post',postRoutes);
router.use('/put',putRoutes);
router.use('/delete',deleteRoutes);

export default router;