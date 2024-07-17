import Company from "../../../Database/Schemas/Company.js";
import createTransaction from "../../Transactions/createTransaction.js";
import UpdateGreenCreditValueFunc from "../../greenCredits/CalculateValue/UpdateGreenCreditValueFunc.js";

const postCompBuyCredits = async (req, res) => {
    try {
        // console.log("Inside postCompBuyCredits", req.body.emailId, req.body.CreditstoBuy);
        const { emailId, noOfCredits,creditprice } = req.body;
        const company = await
        Company.findOne({companyMail: emailId});
        if(!company){
            return res.status(404).json({message: "Company not found"});
        }
        const id = company._id;
        const finalValue = await UpdateGreenCreditValueFunc(id,noOfCredits,creditprice,"Buy");
        // console.log("finalValue", finalValue);
        if (typeof finalValue === "string") {
            return res.json({message: finalValue});
        }
        company.creditsAvailable += noOfCredits;
        company.transactionHistory.push({
            id : company._id,
            date : new Date(),
            creditprice : finalValue,
            noOfCredits : noOfCredits,
        });
        await company.save();
       const TransactionObj = {
            TransactionId: 1,
            category: "Company",
            PersonName: company._id,
            creditValue: finalValue * noOfCredits,
            NoOfCredits: noOfCredits,
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
