import express, { json } from 'express';
import cors from 'cors'
import router from './routes';
import { connectDb } from './utils/connectDb';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 8080

app.use(json());
app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`)
  connectDb();
});