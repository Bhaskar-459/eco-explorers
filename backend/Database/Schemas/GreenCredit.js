import mongoose from "mongoose";

const greenCreditSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    password: String,
});

const greenCredit = mongoose.model('GreenCredit', greenCreditSchema);
export default greenCredit;