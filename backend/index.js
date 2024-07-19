import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
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
    cors:{
        origin: '*',
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        credentials: true
    }
});
io.on('connection', (socket) => {
    console.log(`user connected at ${socket.id}`);

    // socket.emit('welcome', 'welcome to the server')
    // socket.broadcast.emit('welcome', ${socket.id} joined the server)

    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('received_msg', msg);
    });
    socket.emit('creditValueChange', 10400);
    socket.on('disconnect', () => {
        console.log(`user disconnected at ${socket.id}`);
    });
});


