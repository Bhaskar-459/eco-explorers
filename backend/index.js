import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

import apiRoutes from './Routes/routes.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("WELCOME TO COAIMBATORE");
    }
);

// app.get('/login', (req, res) => {
//     res.send("LOGIN PAGE");
//     }
// );
app.use('/api',apiRoutes);

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.log("connection error", error.message);
});

app.listen(process.env.PORT || 5000, () => {
    console.log('Server started at http://localhost:5000');
}
);

