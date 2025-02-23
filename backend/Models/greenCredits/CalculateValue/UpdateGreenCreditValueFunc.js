import greenCredits from '../../../Database/Schemas/GreenCredit.js';
import CalculateValueFunc from './CalculateFunc.js';
import greenCreditHistory from "../../../Database/Schemas/GreenCreditHistory.js";
import io from "./../../../index.js"

const historyChange = async (finalValue) => {
    // console.log("updateHistory")
    const MAX_DATA_POINTS = 30;
    const greenCreditHistoryDoc = await greenCreditHistory.findOne();
    let data = greenCreditHistoryDoc.data
    let time = greenCreditHistoryDoc.time
    if (data.length >= MAX_DATA_POINTS) {
        data.shift(data.length - MAX_DATA_POINTS);
    }
    data = [...data, finalValue]
    if (time.length >= MAX_DATA_POINTS) {
        time.shift(time.length - MAX_DATA_POINTS);
    }
    time = [...time, new Date().toLocaleString()];
    greenCreditHistoryDoc.data = data
    greenCreditHistoryDoc.time=time 
    // console.log("On event",{data,time})
    io.emit('creditHistoryChange', { data: data, time: time });
    await greenCreditHistoryDoc.save();
}
const UpdateGreenCreditValueFunc = async (personId, noOfCredits, creditPrice, type, entity) => {
    try {
        // console.log("update")
        const greenCreditDoc = await greenCredits.findOne();
        if (!greenCreditDoc) {
            throw new Error("Green credit document not found");
        }
        // console.log("entityyeywasysxhn",entity);
        console.log(greenCreditDoc,creditPrice,typeof creditPrice,"from update green credit value func");
        const finalValue = await CalculateValueFunc(personId, noOfCredits, creditPrice, type, entity);

        if (typeof finalValue === "string") {
            return finalValue;
        }

        greenCreditDoc.currValue = finalValue;
        await greenCreditDoc.save();
        console.log("beforeChange")
        await historyChange(finalValue);
        console.log("afterChange")

        return finalValue;
    } catch (error) {
        console.error(error);
        return error.message;
    }
};

export default UpdateGreenCreditValueFunc;



