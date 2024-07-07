import { Router } from "express";
import getRoutes from "../Controllers/People/getController/getRoutes.js";
import postRoutes from "../Controllers/People/postController/postRoutes.js";
import putRoutes from "../Controllers/People/putController/putRoutes.js";
import deleteRoutes from "../Controllers/People/deleteController/deleteRoutes.js";


const router = Router();

router.use('/get',getRoutes);
router.use('/post',postRoutes);
router.use('/put',putRoutes);
router.use('/delete',deleteRoutes);

export default router;