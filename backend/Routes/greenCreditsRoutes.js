import { Router } from "express";
import getRoutes from "../Controllers/greenCredits/getController/getRouters.js";

const router = Router();
router.use('/get',getRoutes);


export default router;
