import people from '../../../Database/Schemas/People.js';
import createTransaction from '../../Transactions/createTransaction.js';
import updateTransactionHistoryForPeople from '../../Transactions/UpdateTransactionHistoryForPeople.js';

const postSellCreditsFunc = async (req, res) => {
    const { email, credits } = req.body;
    try {
        const person = await people.findOne({ email });
        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }

        if (person.portfolio.currentCredits >= credits) {
            person.portfolio.currentCredits -= credits;
            await person.save();

            const TransactionObj = {
                TransactionId: 1,
                category: "People",
                PersonName: person._id,
                creditValue: credits * 10,
                NoOfCredits: credits,
                TransactionDate: new Date(),
                TransactionType: "Sell"
            };

            await createTransaction({ TransactionObj });
            await updateTransactionHistoryForPeople({ TransactionObj }, person, "Sell");

            res.json(person);
        } else {
            res.status(400).json({ message: "Insufficient Credits" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

export default postSellCreditsFunc;