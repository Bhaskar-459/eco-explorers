import ngo from '../../../Database/Schemas/Ngo.js';
const PostLoginFunc = async (req, res) => { 
    const email = req.body.email;
    const password = req.body.password;
    try {
        const Ngo = await ngo.findOne({ email : email }); 
        console.log(Ngo)
        if (!Ngo) {
            return res.status(400).send("Email is not found");
        }
        if (Ngo.personalInfo.password === password) {
            console.log("Login Successful", Ngo.personalInfo.password, password);
            res.send(Ngo);
        } else {
            res.send("Invalid Credentials").status(404);
        }
    }   catch (err) {    
        res.status(400).send(err);     
    }
}
export default PostLoginFunc;