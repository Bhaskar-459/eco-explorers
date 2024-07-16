import companyToSell from "../../../Database/Schemas/CompanyToSell.js"

const getRegisteredFunc = async (req, res) => {
    const Company = await companyToSell.find().populate('id');
    // console.log(Company);
    res.send(Company);
}

export default getRegisteredFunc;