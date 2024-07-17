import TransactionsModel from "../../Database/Schemas/Transactions.js";

const createTransaction = async ({ TransactionObj }) => {
    try {
        console.log("TransactionObj", TransactionObj);
        const transaction = new TransactionsModel({
            TransactionId: TransactionObj.TransactionId,
            category: TransactionObj.category,
            PersonName: TransactionObj.PersonName,
            entityType: TransactionObj.category,
            creditValue: TransactionObj.creditValue,
            NoOfCredits: TransactionObj.NoOfCredits,
            TransactionDate: TransactionObj.TransactionDate,
            TransactionType: TransactionObj.TransactionType
        });

        const savedTransaction = await transaction.save();
        return savedTransaction; // Return saved transaction for confirmation
    } catch (error) {
        console.error(error);
        throw new Error('Transaction creation failed');
    }
};

export default createTransaction;



