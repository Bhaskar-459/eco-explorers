import {v4 as uuidv4} from 'uuid';
import Person from '../../../Database/Schemas/People.js';
import createTransaction from '../../Transactions/createTransaction.js';
import updateTransactionHistoryForPeople from '../../Transactions/updateTransactionHistoryForPeople.js';

const IndividualSell = async (personId, value, noOfCredits) => {
    let person = await Person.findOne({_id: personId});
    person.portfolio.currentCredits -= noOfCredits;
        await person.save();

        const transactionObj = {
            transactionId: uuidv4(),
            transactionCreditValue:noOfCredits * value,
            transactionNoOfCredits: noOfCredits,
            transactionDate: new Date(),
            transactionType: "Sell",
            transactionStatus: "Executed"
        };

        await createTransaction({TransactionObj:transactionObj});
        await updateTransactionHistoryForPeople(transactionObj, person, "Sell");

        res.json(person);
}

export default IndividualSell;