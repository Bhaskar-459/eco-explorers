import mongoose from 'mongoose';
const personalInfo =new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    phone:{
        type : Number,
        required : true,
    },
    address: String,
    password: {
        type : String,
        required : true,
    }});


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
        enum : ["Pending", "Approved"],
        default:"Pending"
    }
});
const ngoSchema = new mongoose.Schema({
    id :{
        type : String,
        required : true,
    },
    email : {  
        type : String,
        required : true,
    },
    ngoPan : {
        type : String,
        required : true,
    },
    gcpPlatformId : {
        type : String,
        required : true,
    },
    personalInfo : {
        type : personalInfo,
        required : true,
    },
    Status :
    {
        type : String,
        values : ["Pending", "Approved", "Rejected"],
        default : "Pending",

    },
    transactionHistory : {
        type : [history],
        default : [],    
    },
    ngoCredits : {
        type : Number,
        default : 0,
    },
    walletAmount : {
        type : Number,
        default : 0,
    },

});

const ngo = mongoose.model('Ngo', ngoSchema);

export default ngo;