import CompanyToSell from "../../../Database/Schemas/CompanyToSell.js";
import createTransaction from "../../Transactions/createTransaction.js";
import { v4 as uuidv4 } from 'uuid';
const CompanySell = async (id, value, noOfCredits) => {
    console.log(id, value, noOfCredits);
    let company = await CompanyToSell.findById(id);
    if (!company) {
        throw new Error("Company not found");
    }
    console.log(company,noOfCredits,"bye bye");
    company.GeneratedCredits -= noOfCredits;
        company.transactionHistory.push({
            id : company.id,
            date : new Date(),
            creditprice : value,
            noOfCredits : noOfCredits,
        });
        console.log(company);   
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

        // await createTransaction({TransactionObj});
        return value;
}

export default CompanySell;
