import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    panCard: String,
    phone: Number,
    address: String,

});

const portfolioSchema = new mongoose.Schema({
    walletAmount: Number,
    currentCredits: Number,
});

const transactionSchema = new mongoose.Schema({
    transactionId: String,
    transactionCreditValue: Number,
    transactionNoOfCredits: Number,
    transactionDate: Date,
});

const peopleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    }
    ,
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    personalInfo: 
    {
        type:personSchema,
        required: true,
    },
    portfolio: 
    {
        type:portfolioSchema,
        default: {walletAmount: 0, currentCredits: 0},
    },
    transactionSchema: {
        type :[transactionSchema],
        default: [],
    },
    password: {
        type: String,
        required: true,
    },
});

const people = mongoose.model('People', peopleSchema);

export default people;