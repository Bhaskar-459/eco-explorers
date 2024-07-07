import Router from "express";

const router = Router();

router.delete('/',(req,res)=>{
    res.send('Hello from getRoutes');
});

export default router;