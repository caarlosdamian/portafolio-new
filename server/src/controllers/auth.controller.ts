import { Request, Response } from 'express';

export const authHandler = (req: Request, res: Response) => {
  res.status(200).send(req.user);
};

export const authStatus = (req: Request, res: Response) => {
  try {
    req.user
    ? res.status(200).send(req.user)
    : res.status(401).send({ msg: 'Bad credentials' });
  } catch (error) {
    res.json(error)
  }
};
