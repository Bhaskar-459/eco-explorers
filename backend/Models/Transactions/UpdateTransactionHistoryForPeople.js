const updateTransactionHistoryForPeople = async ({TransactionObj},person,transactionType) => {
    try {
        const { TransactionId, category, PersonName, creditValue, NoOfCredits } = TransactionObj;

        const transaction = {
            transactionId: TransactionId,
            transactionCreditValue: creditValue,
            transactionNoOfCredits: NoOfCredits,
            transactionDate: new Date(),
            transactionType: transactionType
        }
        person.transactionSchema.push(transaction);
        await person.save();
    }
    catch (error) {
        return JSON.stringify({ message: error.message });
    }
}

export default updateTransactionHistoryForPeople;