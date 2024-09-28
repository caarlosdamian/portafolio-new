import { Request, Response } from 'express';

export const getHealthCheckHandler = async (_req: Request, res: Response) => {
  try {
    res.send('Server connected').status(200);
  } catch (error) {
    res.send({ message: 'Server not responding' }).status(404);
  }
};

export const getPongHandler = async (_req: Request, res: Response) => {
  try {
    res.send('pong 🏓');
  } catch (error) {
    res.send('Sever error 🏓').status(404);
  }
};
