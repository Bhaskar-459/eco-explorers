import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("WELCOME TO COAIMBATORE");
    }
);