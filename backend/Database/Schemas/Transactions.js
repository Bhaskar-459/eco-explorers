import mongoose from "mongoose";

const Transactions = new mongoose.Schema({
    TransactionId: {
        type: String,
        required: true
    },
    category: {
        type: String,
        value : ['Ngo', 'People','Company'],
        required: true
    },
    PersonName: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'entityType',
        required: true
    },
    entityType: {
        type: String,
        enum: ['People', 'Company', 'Ngo']
    },
    creditValue: {
        type: Number,
        required: true
    },
    NoOfCredits: {
        type: Number,
        required: true
    },

});
const TransactionsModel =  mongoose.model('Transactions', Transactions);
export default TransactionsModel;