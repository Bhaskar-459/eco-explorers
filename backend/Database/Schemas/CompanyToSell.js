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
    },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
    },
});

const companyToSellSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",   
    },
    email: {  
        type: String,
        required: true,
    },
    gcpPlatformId: {
        type: String,
        required: true,
    },
    Status: { 
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