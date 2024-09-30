import { NextFunction, Request, Response } from 'express';

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

export const authStatusHandler = (req: Request, res: Response) => {
  try {
    req.user
      ? res.status(200).send(req.user)
      : res.status(401).send({ msg: 'Bad credentials' });
  } catch (error) {
    res.json(error);
  }
};

export const authLogoutHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user) res.sendStatus(401);
    req.logout(function (err) {
      if (err) {
        next(err);
      }
      res.json({ message: 'Succesfully logout' });
    });
    res.json({ message: 'Succesfully logout' });
  } catch (error) {
    res.json({ message: error }).sendStatus(400);
  }
};
