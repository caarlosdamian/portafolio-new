import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';
import { hashPassword } from '../utils/helpers';
import { CreateUserInput } from '../schemas/users.schema';

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) => {
  const body = req.body;

  // const result = validationResult(req);
  // if (!result.isEmpty()) return res.status(400).send(result.array());
  console.log(body);
  body.password = await hashPassword(body.password);
  const newUser = new UserModel(body);
  try {
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (error) {
    res.sendStatus(400);
  }
};

export const getUsersHandler = async (_req: Request, res: Response) => {
  try {
    const users = await UserModel.find({});
    res.status(201).send(users);
  } catch (error) {
    res.sendStatus(400);
  }
};
