import Company from "../../../Database/Schemas/Company.js";
import createTransaction from "../../Transactions/createTransaction.js";
import UpdateGreenCreditValueFunc from "../../greenCredits/CalculateValue/UpdateGreenCreditValueFunc.js";

const postCompBuyCredits = async (req, res) => {
    try {
        const { emailId, noOfCredits, creditPrice } = req.body;

        const company = await Company.findOne({ companyMail: emailId });
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }

        const finalValue = await UpdateGreenCreditValueFunc(company._id, noOfCredits, creditPrice, "Buy");
        if (typeof finalValue === "string") {
            return res.status(400).json({ message: finalValue });
        }

        company.creditsAvailable += noOfCredits;
        company.transactionHistory.push({
            id: company._id,
            date: new Date(),
            creditPrice: finalValue,
            noOfCredits: noOfCredits,
        });

        await company.save();

        const TransactionObj = {
            TransactionId: 1, // Consider a mechanism to generate unique Transaction IDs
            category: "Company",
            PersonName: company._id,
            creditValue: finalValue * noOfCredits,
            NoOfCredits: noOfCredits,
            TransactionDate: new Date(),
            TransactionType: "Buy"
        };

        await createTransaction({ TransactionObj });

        return res.status(200).json({ message: "Credits Bought Successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default postCompBuyCredits;



