import mongoose from "mongoose";

const peopleSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String,
    password: String,
});

const people = mongoose.model('People', peopleSchema);

export default people;