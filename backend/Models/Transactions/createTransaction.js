import TransactionsModel from "../../Database/Schemas/Transactions.js";

const createTransaction = async ({ TransactionObj }) => {
    try {
        console.log("TransactionObj", TransactionObj);
        const Transaction = new TransactionsModel({
            TransactionId: TransactionObj.TransactionId,
            category: TransactionObj.category,
            PersonName: TransactionObj.PersonName,
            creditValue: TransactionObj.creditValue,
            NoOfCredits: TransactionObj.NoOfCredits,
            TransactionDate: TransactionObj.TransactionDate,
            TransactionType: TransactionObj.TransactionType
        });
        const savedTransaction = await Transaction.save();

        return savedTransaction;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export default createTransaction;
