import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    password: String,
});

const company = mongoose.model('Company', companySchema);
export default company;