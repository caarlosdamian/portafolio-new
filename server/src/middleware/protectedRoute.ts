import { NextFunction, Request, Response } from 'express';

export const protectedRouteMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    res.status(401).send({ msg: 'Bad credentials' });
  } else {
    next();
  }
};
