import { Request, Response } from 'express';

export const authHandler = (req: Request, res: Response) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    console.log(error);
  }
};

export const authStatus = (req: Request, res: Response) => {
  try {
    req.user
      ? res.status(200).send(req.user)
      : res.status(401).send({ msg: 'Bad credentials' });
  } catch (error) {
    res.json(error);
  }
};
