import express, { json } from 'express';
import cors from 'cors';
import router from './routes';
import { connectDb } from './utils/connectDb';
import * as dotenv from 'dotenv';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import './strategies/local-strategy';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(json());
app.use(cors());
connectDb();

app.use(
  session({
    secret: process.env.SECRET || 'your-secret-key',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
    store: MongoStore.create({ client: mongoose.connection.getClient() }),
  })
);

app.use(passport.initialize());
app.use(passport.session()); // Attach user property to session
app.use(router);

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});
