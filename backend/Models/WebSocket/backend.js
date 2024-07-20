import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();

const server = createServer(app);

const io = new Server(server, {
    cors:{
        origin: '*',
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        credentials: true
    }
});


const port = 5000;
let datas=[];
let times=[];
const MAX_DATA_POINTS = 30;

app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World');
});

io.on('connection', (socket) => {
    console.log(`user connected at ${socket.id}`);

    // socket.emit('welcome', 'welcome to the server')
    // socket.broadcast.emit('welcome', ${socket.id} joined the server)

    // socket.on('message', (msg) => {
    //     console.log(msg);
    //     socket.broadcast.emit('received_msg', msg);
    // });
    
    setInterval(() => {
        let newvalue=Math.floor(Math.random() * 1000);
        socket.broadcast.emit('creditValueChange', newvalue);
        if (datas.length >= MAX_DATA_POINTS) {
            datas.shift(datas.length-MAX_DATA_POINTS);
        }
        datas = [...datas, newvalue];
        
    
    
        if (times.length >= MAX_DATA_POINTS) {
            times.shift(times.length-MAX_DATA_POINTS);
        }
        times = [...times, new Date().toLocaleTimeString()];
        socket.emit('creditHistoryChange', {datas, times});        
    }, 1000);
    
    socket.on('disconnect', () => {
        console.log(`user disconnected at ${socket.id}`);
    });
    });
   


server.listen(port, () => {
    console.log('listening on port ' + port);
});
