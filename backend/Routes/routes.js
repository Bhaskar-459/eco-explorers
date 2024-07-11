import { Router } from "express";
import ngoRoutes from "./ngoRoutes.js";
import peopleRoutes from "./peopleRoutes.js";
import companyRoutes from "./companyRoutes.js";
import greenCreditsRoutes from "./greenCreditsRoutes.js";

const router = Router();

router.use('/ngo',ngoRoutes);
router.use('/people',peopleRoutes);
router.use('/company',companyRoutes);
router.use('/greenCredits',greenCreditsRoutes);

export default router;
