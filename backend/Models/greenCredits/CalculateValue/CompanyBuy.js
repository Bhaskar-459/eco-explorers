import company from "../../../Database/Schemas/Company.js";
import createTransaction from "../../Transactions/createTransaction.js";
import {v4 as uuidv4} from 'uuid';
const CompanyBuy = async (companyId, noOfCredits, creditPrice) => {
    try {
        const comp = await company.findById(companyId);
        if (!comp) {
            throw new Error("Company not found");
        }
        comp.GeneratedCredits += noOfCredits;
        company.transactionHistory.push({
            id: company._id,
            date: new Date(),
            creditPrice: creditPrice,
            noOfCredits: noOfCredits,
        });

        await company.save();

        const TransactionObj = {
            TransactionId: uuidv4(),
            category: "Company",
            PersonName: company._id,
            creditValue: creditPrice * noOfCredits,
            NoOfCredits: noOfCredits,
            TransactionDate: new Date(),
            TransactionType: "Buy"
        };

        await createTransaction({ TransactionObj });

        return res.status(200).json({ message: "Credits Bought Successfully" });
    }
    catch (error) {
        console.error(error);
        return error.message;
    }
}

export default CompanyBuy;