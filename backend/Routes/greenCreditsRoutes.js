import { Router } from "express";
import getRoutes from "../Controllers/greenCredits/getController/getRouters.js";
import postRoutes from "../Controllers/greenCredits/postController/postRoutes.js";
import putRoutes from "../Controllers/greenCredits/putController/putRoutes.js";
import deleteRoutes from "../Controllers/greenCredits/deleteController/deleteRoutes.js";

const router = Router();
router.use('/get',getRoutes);
router.use('/post',postRoutes);
router.use('/put',putRoutes);
router.use('/delete',deleteRoutes);

export default router;
