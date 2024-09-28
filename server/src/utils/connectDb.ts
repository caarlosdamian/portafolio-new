import mongoose from 'mongoose';

export const connectDb = async () => {
  const connectionUrl = process.env.CONNECTION_STRING || '';
  try {
    await mongoose.connect(connectionUrl);
    console.log('Connected to db');
  } catch (error) {
    console.log(error);
  }
};
