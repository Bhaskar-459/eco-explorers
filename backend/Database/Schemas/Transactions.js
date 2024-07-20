import mongoose from "mongoose";

const transactionsSchema = new mongoose.Schema({
    TransactionId: {
        type: String,
        required: true
    },
    SellerName: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'entityType',
        required: true
    },
    SellerType: {
        type: String,
        enum: ['Company', 'Ngo']
    },
    BuyerName: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'entityType',
        required: true
    },
    BuyerType: {
        type: String,
        enum: ['People', 'Company']
    },
    TransactionDate: {
        type: Date,
        required: true
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

const TransactionsModel = mongoose.model('Transactions', transactionsSchema);
export default TransactionsModel;
