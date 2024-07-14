import People from "../../../Database/Schemas/People.js";
import createTransaction from "../../Transactions/createTransaction.js";
import updateTransactionHistoryForPeople from "../../Transactions/updateTransactionHistoryForPeople.js";
import updateGreenCreditValueFunc from "../../greenCredits/CalculateValue/updateGreenCreditValueFunc.js";

const postSellCreditsFunc = async (req, res) => {
    const { email, credits } = req.body;
    try {
        const person = await People.findOne({ email });
        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }

        if (person.portfolio.currentCredits < credits) {
            return res.status(400).json({ message: "Insufficient Credits" });
        }

        const newCreditValue = await updateGreenCreditValueFunc(credits, 10, "Sell");

        if (typeof newCreditValue === 'string') {
            return res.status(400).json({ message: newCreditValue });
        }

        person.portfolio.currentCredits -= credits;
        await person.save();

        const transactionObj = {
            transactionId: new mongoose.Types.ObjectId().toString(),
            transactionCreditValue: credits * 10,
            transactionNoOfCredits: credits,
            transactionDate: new Date(),
            transactionType: "Sell",
            transactionStatus: "Executed"
        };

        await createTransaction(transactionObj);
        await updateTransactionHistoryForPeople(transactionObj, person, "Sell");

        res.json(person);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

export default postSellCreditsFunc;
