import mongoose from "mongoose";

const entityType = ('Company', 'User', 'Admin');

const List = new mongoose.Schema({
    id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : entityType
    },
    name : {
        type : String,
    },
    price : {
        type : Number,
    }
});

const greenCreditSchema = new mongoose.Schema({
    currValue : {
       type : Number, 
    },
    BuyList :{
        type : [List],
    },
    SellList :{
        type : [List],
    }
});

const greenCredit = mongoose.model('GreenCredit', greenCreditSchema);
export default greenCredit;