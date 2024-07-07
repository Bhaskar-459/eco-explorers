import company from "../../../Database/Schemas/Company.js";

const getAllFunc = async (req, res) => {
    const Company = await company.find();
    res.send(Company);
}

export default getAllFunc;