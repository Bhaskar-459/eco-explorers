import people from "../../../Database/Schemas/People.js";
import createTransaction from "../../Transactions/Transaction.js";
import updateTransactionHistoryForPeople from "../../Transactions/UpdateTransactionHistoryForPeople.js";

const postBuyCreditsFunc = async (req, res) => {
    const { email, credits } = req.body;
    try {
        const person = await people.findOne({ email });
        person.portfolio.currentCredits += credits;
        await person.save();
        const TransactionObj = {
            TransactionId: 1,
            category: "People",
            PersonName: person.Name,
            creditValue: credits*10,
            NoOfCredits: credits
        }
        await createTransaction({TransactionObj});
        await updateTransactionHistoryForPeople({TransactionObj}, person, "Buy");
        res.json(person);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export default postBuyCreditsFunc;