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


const port = 4001;

app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World');
});

io.on('connection', (socket) => {
    console.log(`user connected at ${socket.id}`);

    // socket.emit('welcome', 'welcome to the server')
    // socket.broadcast.emit('welcome', ${socket.id} joined the server)

    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('received_msg', msg);
    });

    socket.on('disconnect', () => {
        console.log(`user disconnected at ${socket.id}`);
    });
});

server.listen(port, () => {
    console.log('listening on port ' + port);
});
