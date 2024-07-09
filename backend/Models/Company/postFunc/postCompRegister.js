import company from "../../../Database/Schemas/Company.js";

const PostRegisterFunc = async (req, res) => {
    const id = req.body.id;
    const displayName = req.body.displayName;
    const companyPan = req.body.companyPan;
    const creditsAvailable = req.body.creditsAvailable;
    const companyMail = req.body.companyMail;
    const password = req.body.password;
    try {
        const Company = await company.findOne({ companyMail: companyMail });    
        if (Company) {
            return res.status(400).send("Email already exists");
        }
        const newCompany = new company({
            id: id,
            displayName: displayName,
            companyPan: companyPan,
            creditsAvailable: creditsAvailable,
            companyMail: companyMail,
            password: password
        });
        console.log(req.body);
        await newCompany.save();
        res.send(newCompany);
    }
    catch (err) {
        res.status(400).send(err);
    }
}
export default PostRegisterFunc;