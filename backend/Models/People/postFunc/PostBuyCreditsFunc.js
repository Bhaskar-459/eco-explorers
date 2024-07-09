import people from "../../../Database/Schemas/People.js";
import createTransaction from "../../Transactions/createTransaction.js";
import updateTransactionHistoryForPeople from "../../Transactions/UpdateTransactionHistoryForPeople.js";

const postBuyCreditsFunc = async (req, res) => {
    const { email, credits } = req.body;
    try {
        const person = await people.findOne({ email });
        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }
        
        person.portfolio.currentCredits += credits;
        await person.save();
        
        const TransactionObj = {
            TransactionId: 1,
            category: "People",
            TransactionDate: new Date(),
            TransactionType: "Buy",
            PersonName: person._id,
            creditValue: credits * 10,
            NoOfCredits: credits
        };

        await createTransaction({ TransactionObj });
        await updateTransactionHistoryForPeople({ TransactionObj }, person, "Buy");
        res.json(person);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

export default postBuyCreditsFunc;