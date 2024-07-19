import Ngo from "../../../Database/Schemas/Ngo.js";
import createTransaction from "../../Transactions/createTransaction.js";
import { v4 as uuidv4 } from 'uuid';
const NgoSell = async (ngoId, value,noOfCredits) => {
    let ngo = await Ngo.findOne({ NgoId: ngoId });
    if (!ngo) {
        throw new Error("Ngo not found");
    }


    ngo.ngoCredits = ngo.ngoCredits - value;

    // updating the transaction history for the Ngo
    ngo.transactionHistory.push({
        id: ngo.id,
        date: new date.now(),
        creditprice: value,
        noOfCredits: noOfCredits,
    });
    await ngo.save();

    // creating a transaction for the Ngo in the transaction collection
    const TransactionObj = {
        TransactionId: uuidv4(),
        category: "Ngo",
        PersonName: ngo.personalInfo._id,
        creditValue: value,
        NoOfCredits: noOfCredits,
        TransactionDate: new date.now(),
        TransactionType: "Sell"
    };
    await createTransaction({ TransactionObj });

    return ngo.transactionHistory;
}

export default NgoSell;