import CompanyToSell from "../../../Database/Schemas/CompanyToSell.js";
import createTransaction from "../../Transactions/createTransaction.js";
import { v4 as uuidv4 } from 'uuid';
const CompanySell = async (id, value, noOfCredits) => {
    let company = await CompanyToSell.findOne({ _id: id });
    if (!company) {
        throw new Error("Company not found");
    }
    company.GeneratedCredits -= noOfCredits;
        company.transactionHistory.push({
            id : company.id,
            date : new Date(),
            creditprice : value,
            noOfCredits : noOfCredits,
        });
        await company.save();
        const compId =  (await company.populate('id'))._id;
        const TransactionObj = 
            {
                TransactionId: uuidv4(),
                category: "Company",
                PersonName: compId,
                creditValue: noOfCredits * value,
                NoOfCredits: noOfCredits,
                TransactionDate: new Date(),
                TransactionType: "Sell"
            }

        await createTransaction({TransactionObj});
        return res.status(200).json({message: "Credits Sold Successfully"});
}

export default CompanySell;
