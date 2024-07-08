import People from '../../../Database/Schemas/People.js';
const GetFunc = async (req, res) => {
    const allPersons = await People.find();
    res.json(allPersons);
}

export default GetFunc;