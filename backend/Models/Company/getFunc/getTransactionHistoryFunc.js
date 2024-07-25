import Company from "../../../Database/Schemas/Company.js";
import CompanyToSell from "../../../Database/Schemas/CompanyToSell.js";

const getTransactionHistoryFunc = async (req, res) => {
    try {
        const email = req.params.email;
        const arr = [];
        
        const companyHistory = await Company.findOne({ companyMail: email });
        const companyToSellHistory = await CompanyToSell.findOne({ email: email });

        if (companyHistory) {
            arr.push(...companyHistory.transactionHistory);
            
            if (companyToSellHistory) {
                arr.push(...companyToSellHistory.transactionHistory);
            }

            arr.sort((a, b) => new Date(a.date) - new Date(b.date)); // Sorting the array based on date in ascending order

            res.send(arr);
        } else {
            res.status(404).json({ message: "Company history not found" });
        }
    } catch (error) {
        console.error("Error fetching transaction history: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default getTransactionHistoryFunc;

