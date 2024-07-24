const updateTransactionHistoryForPeople = async ({TransactionObj},person,transactionType) => {
    try {
        const { TransactionId, category, PersonName, creditValue, NoOfCredits } = TransactionObj;
    //    console.log("TransactionObj from updaetet", TransactionObj);
        const transaction = {
            transactionId: TransactionId,
            transactionCreditValue: creditValue,
            transactionNoOfCredits: NoOfCredits,
            transactionDate: new Date(),
            transactionType: transactionType
        }
        // console.log("Transaction from update", transaction);
        await person.transactions.push(transaction);
        await person.save();
        // console.log(person);
        return "Transaction history updated successfully";
    }
    catch (error) {
        return JSON.stringify({ message: error.message });
    }
}

export default updateTransactionHistoryForPeople;