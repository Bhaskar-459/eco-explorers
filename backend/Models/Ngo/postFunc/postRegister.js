import ngo from '../../../Database/Schemas/Ngo.js';

const PostRegisterFunc = async (req, res) => {
    // res.send("PostRegisterFunc");
    // console.log("PostRegisterFunc");    
    const personalInfo = {
        name : req.body.personalInfo.name,
        phone : req.body.personalInfo.phone,
        address : req.body.personalInfo.address,
        password : req.body.personalInfo.password,
    }
    const Ngo = new ngo({
        id : req.body.id,
        email : req.body.email,
        ngoPan : req.body.ngoPan,
        gcpPlatformId : req.body.gcpPlatformId,
        personalInfo : personalInfo,
    });
    try {
        const savedNgo = await Ngo.save();
        res.json(savedNgo);
    } catch (err) {
        res.json({ message: err });
    }
}

export default PostRegisterFunc;