import express, { json } from 'express';
import cors from 'cors'
import router from './routes';
import { connectDb } from './utils/connectDb';
import * as dotenv from 'dotenv';
import passport from 'passport';
import session from 'express-session'
import './strategies/local-strategy'
dotenv.config();

const app = express();
const port = process.env.PORT || 8080

app.use(json());
app.use(cors())

app.use(
  session({
    secret: process.env.SECRET || '' ,
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false,  // Set true if using HTTPS
      maxAge: 1000 * 60 * 60 * 24  // Session expiration time in milliseconds (1 day here)
    }
  })
);
app.use(passport.initialize());
app.use(passport.session()); // attaching user prop to session
app.use(router)

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`)
  connectDb();
});