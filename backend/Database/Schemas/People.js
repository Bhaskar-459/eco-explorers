import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    panCard: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

const portfolioSchema = new mongoose.Schema({
    walletAmount: {
        type: Number,
        default: 0,
    },
    currentCredits: {
        type: Number,
        default: 0,
    },
});

const transactionSchema = new mongoose.Schema({
    transactionId: { type: String, required: true },
    transactionCreditValue: { type: Number, required: true },
    transactionNoOfCredits: { type: Number, required: true },
    transactionDate: { type: Date, required: true },
    transactionType: { type: String, required: true },
    status :{
        type : String,
        enum : ["Pending", "Approved"],
        default:"Pending"
    }
});

const peopleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    personalInfo: {
        type: personSchema,
        required: true,
    },
    portfolio: {
        type: portfolioSchema,
        default: { walletAmount: 0, currentCredits: 0 },
    },
    transactions: {
        type: [transactionSchema],
        default: [],
    },
    password: {
        type: String,
        required: true,
    },
});

const People = mongoose.model('People', peopleSchema);

export default People;
