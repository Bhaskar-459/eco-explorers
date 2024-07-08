import TransactionsModel  from "../../Database/Schemas/Transactions.js";

const UpadateTransaction = async ({TransactionObj}) => {
    try {
        console.log(TransactionObj,"cameemeemem");
        const { TransactionId, category, PersonName, creditValue, NoOfCredits } = TransactionObj;
        const transaction = new TransactionsModel({
            TransactionId,
            category,
            PersonName,
            creditValue,
            NoOfCredits
        });
        const transactionObj  = await transaction.save();
        console.log(transactionObj);
        return transactionObj;
    } catch (error) {
        return JSON.stringify({ message: error.message });
    }
}

export default UpadateTransaction;