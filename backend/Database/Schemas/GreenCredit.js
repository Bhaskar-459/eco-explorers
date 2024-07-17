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
       default : 0
    },
    BuyList :{
        type : [List],
        default : []
    },
    SellList :{
        type : [List],
        default : []
    }
});

const greenCredit = mongoose.model('GreenCredit', greenCreditSchema);
export default greenCredit;