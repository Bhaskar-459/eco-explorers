import greenCredits from '../../../Database/Schemas/GreenCredit.js';
import CalculateValueFunc from './CalculateFunc.js';

const UpdateGreenCreditValueFunc = async (personId, noOfCredits, creditPrice, type,entity) => {
    try {
        const greenCreditDoc = await greenCredits.findOne();
        if (!greenCreditDoc) {
            throw new Error("Green credit document not found");
        }

        const finalValue = await CalculateValueFunc(personId, noOfCredits, creditPrice, type,entity);
        
        if (typeof finalValue === "string") {
            return finalValue;
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



