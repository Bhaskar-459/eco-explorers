import greenCredits from '../../../Database/Schemas/GreenCredit.js';
import CalculateValueFunc from './CalculateFunc.js';
const postFunc = async (noOfCredits,creditprice,type) => {
    try {
        value = greenCredits.currValue;
        finalValue = CalculateValueFunc(value, noOfCredits, creditprice,type);
        const GreenCredits = new greenCredits({
            currValue: finalValue
        });
        await GreenCredits.save();
        res.status(200).json(GreenCredits.currValue);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export default postFunc;
