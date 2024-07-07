import mongoose from 'mongoose';

const ngoSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    password: String,
});

const ngo = mongoose.model('Ngo', ngoSchema);

export default ngo;