import Ngo from "../../../Database/Schemas/Ngo.js";

const postVerifyFunc = async (req, res) => {
    const email = req.body.email;
    const ngo = await Ngo.findOne
    ({
        email : email
    });
    if(ngo){
        ngo.ngoCredits = ngo.ngoCredits + 100;
        await ngo.save();
        res.send(ngo);
    }
    else{
        res.json({ message: "Ngo not found" });
    }
}

export default postVerifyFunc;