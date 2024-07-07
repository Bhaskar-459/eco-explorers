import Router from "express";

const router = Router();

router.put('/',(req,res)=>{
    res.send('Hello from getRoutes');
});

export default router;