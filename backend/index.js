import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import path from 'path';

import apiRoutes from './Routes/routes.js';
import greenCreditHistory from '../backend/Database/Schemas/GreenCreditHistory.js';
import greenCredit from '../backend/Database/Schemas/GreenCredit.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("WELCOME TO COAIMBATORE");
});

app.use('/api', apiRoutes);
console.log("hi");
// mongoose.connect("mongodb://0.0.0.0:27017/")
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log("connection error", error.message);
    });

const server = app.listen(process.env.PORT || 5000, () => {
    console.log('Server started at http://localhost:5000');
});

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        credentials: true
    }
});
io.on('connection', (socket) => {
    console.log(`user connected at ${socket.id}`);
    socket.on('disconnect', () => {
        console.log(`user disconnected at ${socket.id}`);
    });
});

export default io;
// const MAX_DATA_POINTS = 30;
// let datas = [];
// let times = [];
// const fetchInitialData = async () => {
//     try {
//         const response = await axios.get(`${base_url}/api/greenCreditHistory`);
//         datas=response.data.data;
//         times=response.data.time;
//         value=response.data.data[-1];
//     } catch (error) {
//         console.error("Error fetching initial green credit history: ", error);
//     }
// };

// fetchInitialData();
// setInterval(async () => {
//     try {
//         const greenCreditDoc = await greenCredit.findOne();
//         if (greenCreditDoc) {
//             let newvalue = greenCreditDoc.currValue;
//             if (datas.length >= MAX_DATA_POINTS) {
//                 datas.shift(datas.length - MAX_DATA_POINTS);
//             }
//             datas = [...datas, newvalue];

//             if (times.length >= MAX_DATA_POINTS) {
//                 times.shift(times.length - MAX_DATA_POINTS);
//             }
//             times = [...times, new Date().toLocaleTimeString()];

//             await greenCreditHistory.updateOne(
//                 {},
//                 {
//                     $set: {
//                         data: datas,
//                         time: times
//                     }
//                 },
//                 { upsert: true }
//             );

//             io.emit('creditHistoryChange', { datas, times });
//         }
//     } catch (error) {
//         console.log("Error updating GreenCreditHistory: ", error.message);
//     }
// }, 5000);

