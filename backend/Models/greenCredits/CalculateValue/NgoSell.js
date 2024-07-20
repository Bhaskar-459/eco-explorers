import Ngo from "../../../Database/Schemas/Ngo.js";
import createTransaction from "../../Transactions/createTransaction.js";
import { v4 as uuidv4 } from 'uuid';
const NgoSell = async (ngoId, value,noOfCredits) => {
    console.log(ngoId, value, noOfCredits);
    let ngo = await Ngo.findById(ngoId);
    if (!ngo) {
        throw new Error("Ngo not found");
    }

     console.log(typeof value,"from ngo sell");
    ngo.ngoCredits = ngo.ngoCredits - value;

    // updating the transaction history for the Ngo
    ngo.transactionHistory.push({
        id: ngo.id,
        date: new Date(),
        creditprice: value,
        noOfCredits: noOfCredits,
    });
    console.log(await ngo.save());

    return ngo.transactionHistory;
}

export default NgoSell;