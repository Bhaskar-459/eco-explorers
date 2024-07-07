import mongoose from "mongoose";


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
});

const company = mongoose.model('Company', companySchema);
export default company;