import ngo from "../../../Database/Schemas/Ngo.js";
const getFunc = async (req, res) => {
    const Ngo = await ngo.find();
    res.send(Ngo);
}

export default getFunc;