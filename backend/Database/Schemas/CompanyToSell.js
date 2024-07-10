import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    id: {
        type: String,
    },
    date: {
        type: Date,
    },
    creditprice: {
        type: Number,
    },
    noOfCredits: {
        type: Number,
    }
});

const companyToSellSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    email: {  
        type: String,
        required: true,
    },
    gcpPlatformId: {
        type: String,
        required: true,
    },
    Status: {  // Corrected field name to be consistent
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
    },
    transactionHistory: {
        type: [historySchema],
        default: [],    
    },
    GeneratedCredits: {
        type: Number,
        required: true,
    },
});

const companyToSell = mongoose.model('CompanyToSell', companyToSellSchema);
export default companyToSell;