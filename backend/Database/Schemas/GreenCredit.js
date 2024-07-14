import mongoose from "mongoose";

const entityType = ('People', 'Company', 'Ngo');

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
    },
    quantity : {
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