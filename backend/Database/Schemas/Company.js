import mongoose from "mongoose";

const history = new mongoose.Schema({
    id : {
       type : String,
    },
    date : {
        type : Date,
    },
    creditprice : {
        type : Number,
    },
    noOfCredits : {
        type : Number,
    },
    status :{
        type : String,
        enum : ["Pending", "Executed"],
        default : "Pending"

    }
});
const companySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    companyPan: {
        type: String,
        required: true
    },
    creditsAvailable: {
        type: Number,
        default: 0
    },
    companyMail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isRegisteredOnGCP: {
        type: Boolean,
        enum : [true, false],
        default: false
    },
    transactionHistory: {
        type: [history],
        default: [],
    },
    walletAmount: {
        type: Number,
        default: 0
    },

});

const company = mongoose.model('Company', companySchema);
export default company;