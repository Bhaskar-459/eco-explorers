import greenCredits from '../../../Database/Schemas/GreenCredit.js';
const getFunc = async (req, res) => {
    try {
        const GreenCredits = await greenCredits.find();
        // console.log(GreenCredits);
        const value = GreenCredits[0].currValue;
        res.send({"value":value});
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export default getFunc;