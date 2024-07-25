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

        const finalValue = await UpdateGreenCreditValueFunc(company._id, noOfCredits, creditPrice, "Buy", "Company");
        if (typeof finalValue === "string") {
            const transactionObj = {
                id : company._id,
                credits: noOfCredits,
                price: creditPrice,
                type: "Buy",
                status: "Pending",
            };
            company.transactions.push(transactionObj);
            return res.status(400).json({ message: finalValue });
            
        }
        res.status(200).json({ message: "Credits sold successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default postCompBuyCredits;



