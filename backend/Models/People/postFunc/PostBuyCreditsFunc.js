import People from "../../../Database/Schemas/People.js";
import createTransaction from "../../Transactions/createTransaction.js";
import updateTransactionHistoryForPeople from "../../Transactions/updateTransactionHistoryForPeople.js";
import updateGreenCreditValueFunc from "../../greenCredits/CalculateValue/updateGreenCreditValueFunc.js";
import mongoose from 'mongoose';

const postBuyCreditsFunc = async (req, res) => {
    const { email, credits } = req.body;
    try {
        const person = await People.findOne({ email });
        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }
        const personId = person._id;
        const newCreditValue = await updateGreenCreditValueFunc(personId,credits, 10, "Buy");
        console.log("newCreditValue", newCreditValue);
        
        if (typeof newCreditValue === 'string') {
            return res.status(400).json({ message: newCreditValue });
        }
        
        person.portfolio.currentCredits += credits;
        await person.save();

        const transactionObj = {
            transactionId: new mongoose.Types.ObjectId().toString(),
            transactionCreditValue: credits * 10,
            transactionPersonName: person._id,
            transactionCategory: "People",
            transactionNoOfCredits: credits,
            transactionDate: new Date(),
            transactionType: "Buy",
            transactionStatus: "Executed"
        };

        // console.log("transactionObj", transactionObj);

        await createTransaction({ TransactionObj: transactionObj  });
        await updateTransactionHistoryForPeople(transactionObj, person, "Buy");
        console.log("transactionObj came ra");
        res.status(200).json({ message: 'Credits bought successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

export default postBuyCreditsFunc;
