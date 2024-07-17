import greenCredit from "../../../Database/Schemas/GreenCredit.js";

const createGreenCredit = async (req, res) => {
    const greenCreditDoc = new greenCredit({
        currValue:0,
    });

    try {
        await greenCreditDoc.save();
        res.status(201).send(greenCreditDoc);
    } catch (error) {
        res.status(400).send(error);
    }
}

export default createGreenCredit;