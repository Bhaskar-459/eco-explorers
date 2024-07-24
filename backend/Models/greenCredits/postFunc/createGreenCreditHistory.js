import createGreenCreditHistory from "../../../Database/Schemas/GreenCreditHistory.js";

const createGreenCreditHistory = async (req, res) => {
    const greenCreditDocHistory= new createGreenCreditHistory();

    try {
        await greenCreditDocHistory.save();
        res.status(201).send(greenCreditDocHistory);
    } catch (error) {
        res.status(400).send(error);
    }
}

export default createGreenCreditHistory;