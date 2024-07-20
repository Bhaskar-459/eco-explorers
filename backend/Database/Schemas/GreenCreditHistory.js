import mongoose from "mongoose";

const GreenCreditHistorySchema = new mongoose.Schema({
    data: {
        type: [Number],
        default: []
    },
    time: {
        type: [String],
        default: []
    }
});

const greenCreditHistory = mongoose.model('GreenCreditHistory', GreenCreditHistorySchema);

export default greenCreditHistory;
