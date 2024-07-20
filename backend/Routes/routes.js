import { Router } from "express";
import ngoRoutes from "./ngoRoutes.js";
import peopleRoutes from "./peopleRoutes.js";
import companyRoutes from "./companyRoutes.js";
import greenCreditsRoutes from "./greenCreditsRoutes.js";
import greenCreditHistory from "../Database/Schemas/GreenCreditHistory.js";

const router = Router();

router.use('/ngo',ngoRoutes);
router.use('/people',peopleRoutes);
router.use('/company',companyRoutes);
router.use('/greenCredits',greenCreditsRoutes);
router.get('/greenCreditHistory', async (req, res) => {
    try {
        const history = await greenCreditHistory.findOne();
        if (history) {
            res.json({ data: history.data, time: history.time });
        } else {
            res.json({ data: [], time: [] });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching green credit history" });
    }
});


export default router;
