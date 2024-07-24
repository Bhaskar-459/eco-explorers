import People from "../../../Database/Schemas/People.js";
import createTransaction from "../../Transactions/createTransaction.js";
import updateTransactionHistoryForPeople from "../../Transactions/updateTransactionHistoryForPeople.js";
import {v4 as uuidv4} from 'uuid';

const IndividualBuy = async (personId, noOfCredits, creditPrice) => {
    try {
        const person = await People.findById(personId);
        if (!person) {
            throw new Error("Person not found");
        }
        person.portfolio.currentCredits += noOfCredits;
        const transactionObj = {
            TransactionId: uuidv4(),
            creditValue: noOfCredits * creditPrice,
            PersonName: person._id,
            category: "People",
            NoOfCredits: noOfCredits,
            TransactionDate: new Date(),
            TransactionType: "Buy",
            transactionStatus: "Executed"
        };
        // const savedTransaction = await createTransaction({ TransactionObj: transactionObj });
        await person.save();
        await updateTransactionHistoryForPeople({ TransactionObj: transactionObj }, person, "Buy");
        return 1;
    }
    catch (error) {
        console.error(error);
        return error.message;
    }
}

export default IndividualBuy;