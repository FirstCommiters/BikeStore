import * as dotenv from 'dotenv';
import * as express from 'express';
import model from './model';

dotenv.config();

const app = express();
model();

app.listen(process.env.PORT, () => {
    console.log(`The server is running in port: ${process.env.PORT}`);
})
