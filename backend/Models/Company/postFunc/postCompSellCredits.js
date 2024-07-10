import companyToSell from "../../../Database/Schemas/CompanyToSell.js";
import createTransaction from "../../Transactions/createTransaction.js";

const postCompSellCredits = async (req, res) => {
    try {
        const { emailId, CreditstoSell } = req.body;
        const company = await companyToSell.findOne({email: emailId});
        if(!company){
            return res.status(404).json({message: "Company not found"});
        }
        if(company.populate('id').isRegisteredOnGCP === false){
            return res.status(400).json({message: "Company not registered on GCP"});
        }

        if(CreditstoSell > company.GeneratedCredits){
            return res.status(400).json({message: "Insufficient Credits"});
        }
        company.GeneratedCredits -= CreditstoSell;
        company.transactionHistory.push({
            id : company._id,
            date : new Date(),
            creditprice : company.creditprice,
            noOfCredits : CreditstoSell,
        });
        await company.save();
        createTransaction({
            TransactionId: 1,
            category: "Company",
            CompanyName: company.populate('id').displayName,
            creditValue: CreditstoSell * 10,
            NoOfCredits: CreditstoSell,
            TransactionDate: new Date(),
            TransactionType: "Sell"
        });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export default postCompSellCredits;
