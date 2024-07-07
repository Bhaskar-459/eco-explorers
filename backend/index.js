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

app.use('/api',apiRoutes);

// mongoose.connect(process.env.MONGODB_URL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

app.listen(process.env.PORT || 5000, () => {
    console.log('Server started at http://localhost:5000');
}
);

