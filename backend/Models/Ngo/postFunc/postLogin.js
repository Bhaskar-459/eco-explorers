import ngo from '../../../Database/Schemas/Ngo.js';
const PostLoginFunc = async (req, res) => { 
    const email = req.body.email;
    const password = req.body.password;
    console.log(password);
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
            console.log("Invalid Credentials", Ngo.personalInfo.password, password);
            res.status(404).send("Invalid Credentials");
        }
    }   catch (err) {    
        res.status(400).send(err);     
    }
}
export default PostLoginFunc;