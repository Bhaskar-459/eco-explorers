import greenCredits from '../../../Database/Schemas/GreenCredit.js';
import CalculateValueFunc from './CalculateFunc.js';

const UpdateGreenCreditValueFunc = async (personId,noOfCredits, creditPrice, type) => {
    try {
        const greenCreditDoc = await greenCredits.findOne();
        if (!greenCreditDoc) {
            throw new Error("Green credit document not found");
        }

        const value = greenCreditDoc.currValue;
        const finalValue = await CalculateValueFunc(personId,value, noOfCredits, creditPrice, type);
        // console.log("finalValue", finalValue);
        if (typeof finalValue.message === "string") {
            return finalValue.message;
        }
        greenCreditDoc.currValue = finalValue;

        await greenCreditDoc.save();

        return finalValue;
    } catch (error) {
        console.error(error);
        return error.message;
    }
};

export default UpdateGreenCreditValueFunc;

