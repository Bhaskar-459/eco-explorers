import People from "../../../Database/Schemas/People.js";
import createTransaction from "../../Transactions/createTransaction.js";
import updateTransactionHistoryForPeople from "../../Transactions/updateTransactionHistoryForPeople.js";
import updateGreenCreditValueFunc from "../../greenCredits/CalculateValue/updateGreenCreditValueFunc.js";
import mongoose from 'mongoose';

const postBuyCreditsFunc = async (req, res) => {
    const { email, noOfCredits, creditPrice } = req.body;
    try {
        const person = await People.findOne({ email });
        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }
        const personId = person._id;
        const newCreditValue = await updateGreenCreditValueFunc(personId, noOfCredits, creditPrice, "Buy", "People");

        if (typeof newCreditValue === 'string') {
            return res.status(400).json({ message: newCreditValue });
        }

        res.json(newCreditValue);

        const transactionObj = {
            TransactionId: new mongoose.Types.ObjectId().toString(),
            creditValue: noOfCredits * creditPrice,
            PersonName: person._id,
            category: "People",
            NoOfCredits: noOfCredits,
            TransactionDate: new Date(),
            TransactionType: "Buy",
            transactionStatus: "Executed"
        };

        const savedTransaction = await createTransaction({ TransactionObj: transactionObj });
        await updateTransactionHistoryForPeople({ TransactionObj: transactionObj }, person, "Buy");

        res.status(200).json({ message: 'Credits bought successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

export default postBuyCreditsFunc;
