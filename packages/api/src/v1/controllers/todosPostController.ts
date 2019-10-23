import { Request, Response } from 'express';
import { Todo } from '../db';

export const todosPostController = async (req: Request, res: Response) => {
  const now = new Date().toISOString();
  try {
    const data = { ...req.body };
    data.createdDate = now;
    data.updatedDate = now;
    const todoModel = new Todo(data);
    const result = await todoModel.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
