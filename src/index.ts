import { createServer } from "http";
import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const httpServer = createServer(app);

app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({ extended: true }));

httpServer.listen(process.env.PORT || 5000);
