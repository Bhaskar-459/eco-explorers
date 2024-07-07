import mongoose from "mongoose";

const companyToSellSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    password: String,
});

const companyToSell = mongoose.model('CompanyToSell', companyToSellSchema);
export default companyToSell;