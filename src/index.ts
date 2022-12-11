import { createServer } from 'http';
import express from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';
const { sequelize } = require('./models');

dotenv.config();

const app = express();
const httpServer = createServer(app);

app.use('/api', routes);

app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({ extended: true }));

httpServer.listen(process.env.PORT || 5000);
