import Company from "../../../Database/Schemas/Company.js";
import createTransaction from "../../Transactions/createTransaction.js";

const postCompBuyCredits = async (req, res) => {
    try {
        // console.log("Inside postCompBuyCredits", req.body.emailId, req.body.CreditstoBuy);
        const { emailId, CreditstoBuy } = req.body;
        const company = await
        Company.findOne({companyMail: emailId});
        if(!company){
            return res.status(404).json({message: "Company not found"});
        }
        company.creditsAvailable += CreditstoBuy;
        company.transactionHistory.push({
            id : company._id,
            date : new Date(),
            creditprice : company.creditprice,
            noOfCredits : CreditstoBuy,
        });
        await company.save();
       const TransactionObj = {
            TransactionId: 1,
            category: "Company",
            PersonName: company._id,
            creditValue: CreditstoBuy * 10,
            NoOfCredits: CreditstoBuy,
            TransactionDate: new Date(),
            TransactionType: "Buy"
       }

        await createTransaction({TransactionObj});

        return res.status(200).json({message: "Credits Bought Successfully"});
    }
    catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export default postCompBuyCredits;
