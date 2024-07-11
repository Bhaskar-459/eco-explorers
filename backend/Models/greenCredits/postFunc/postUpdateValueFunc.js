import greenCredits from '../../../Database/Schemas/GreenCredit.js';
const postFunc = async (req, res) => {
    try {
        const { value } = req.body;
        const GreenCredits = new greenCredits({
            currValue: value
        });
        await GreenCredits.save();
        res.status(200).json(GreenCredits.currValue);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export default postFunc;
