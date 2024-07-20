import mongoose from "mongoose";

const entityType = ['People', 'Company', 'Ngo'];

const ListSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'entityType'
    },
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    entityType: {
        type: String,
        enum: entityType
    }
});

const greenCreditSchema = new mongoose.Schema({
    currValue: {
        type: Number,
        default: 0
    },
    BuyList: {
        type: [ListSchema],
        default: []
    },
    SellList: {
        type: [ListSchema],
        default: []
    }
});

const greenCredit = mongoose.model('GreenCredit', greenCreditSchema);
export default greenCredit;
