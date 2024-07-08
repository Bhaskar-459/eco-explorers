import people from '../../../Database/Schemas/People.js';
import UpadateTransaction from '../../Transactions/Transaction.js';
import updateTransactionHistoryForPeople from '../../Transactions/UpdateTransactionHistoryForPeople.js';
const postSellCreditsFunc = async (req, res) => {
    const { email, credits } = req.body;
    try {
        const person = await people.findOne({ email});
        if (person.portfolio.currentCredits >= credits) {
            person.portfolio.currentCredits -= credits;
            await person.save();
            const TransactionObj = {
                TransactionId: 1,
                category: "People",
                PersonName: person.Name,
                creditValue: credits*10,
                NoOfCredits: credits
            }
            await UpadateTransaction({TransactionObj});
            await updateTransactionHistoryForPeople({TransactionObj}, person, "Sell");

            res.json(person);
        }
        else {
            res.json({ message: "Insufficient Credits" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default postSellCreditsFunc;