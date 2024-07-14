import TransactionsModel from "../../Database/Schemas/Transactions.js";

const createTransaction = async ({ TransactionObj }) => {
    try {
        const transaction = new TransactionsModel({
            TransactionId: TransactionObj.transactionId,
            category: TransactionObj.transactionCategory,
            PersonName: TransactionObj.transactionPersonName,
            entityType: TransactionObj.transactionCategory,
            creditValue: TransactionObj.transactionCreditValue,
            NoOfCredits: TransactionObj.transactionNoOfCredits,
            TransactionDate: TransactionObj.transactionDate,
            TransactionType: TransactionObj.transactionType
        });

        const savedTransaction = await transaction.save();
    } catch (error) {
        console.error(error);
        throw new Error('Transaction creation failed');
    }
};

export default createTransaction;


