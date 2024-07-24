import mongoose from "mongoose";
import People from "../../../Database/Schemas/People.js";
import createTransaction from "../../Transactions/createTransaction.js";
import updateTransactionHistoryForPeople from "../../Transactions/updateTransactionHistoryForPeople.js";
import updateGreenCreditValueFunc from "../../greenCredits/CalculateValue/updateGreenCreditValueFunc.js";

const postSellCreditsFunc = async (req, res) => {
    const { email,noOfCredits,creditPrice } = req.body;
    try {
        const person = await People.findOne({ email });
        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }

        if (person.portfolio.currentCredits < noOfCredits) {
            return res.status(400).json({ message: "Insufficient Credits" });
        }
        const personId = person._id;
        const newCreditValue = await updateGreenCreditValueFunc(personId,noOfCredits, creditPrice, "Sell","People");
        console.log(newCreditValue);
        if(typeof newCreditValue === 'number'){
            return res.status(200).json({ message: 'Credits bought successfully' });
        }
        else if (typeof newCreditValue === 'string') {
            return res.status(400).json({ message: newCreditValue });
        }

        res.json(newCreditValue);

        // person.portfolio.currentCredits -= noOfCredits;
        // await person.save();

        // const transactionObj = {
        //     transactionId: new mongoose.Types.ObjectId().toString(),
        //     transactionCreditValue:noOfCredits * creditPrice,
        //     transactionNoOfCredits: noOfCredits,
        //     transactionDate: new Date(),
        //     transactionType: "Sell",
        //     transactionStatus: "Executed"
        // };

        // await createTransaction({TransactionObj:transactionObj});
        // await updateTransactionHistoryForPeople(transactionObj, person, "Sell");

        // res.json(person);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

export default postSellCreditsFunc;
