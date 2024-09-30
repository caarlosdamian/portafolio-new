import { Request, Response } from 'express';
import { BlogModel } from '../models/blog.model';

export const getBlogsHandler = async (_req: Request, res: Response) => {
  try {
    const blogs = await BlogModel.find();
    res.json(blogs).status(200);
  } catch (error) {
    res.json({ message: error });
  }
};
