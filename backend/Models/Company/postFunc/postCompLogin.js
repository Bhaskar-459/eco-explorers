import company from "../../../Database/Schemas/Company.js";

const PostLoginFunc = async (req, res) => {
    const companyMail = req.body.email;
    const password = req.body.password;
    try {
        const Company = await company.findOne({ companyMail: companyMail });
        if (!Company) {
            return res.status(400).send("Email does not exist");
        }   
        if (Company.password !== password) {
            return res.status(400).send("Password incorrect");
        }
        res.send(Company);
    }
    catch (err) {
        res.status(400).send(err);
    }
}
export default PostLoginFunc;
