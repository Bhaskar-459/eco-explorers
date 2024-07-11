import greenCredits from '../../../Database/Schemas/GreenCredit.js';
const getFunc = async (req, res) => {
    try {
        const GreenCredits = await greenCredits.find();
        const value = GreenCredits.currValue;
        res.send(value);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export default getFunc;