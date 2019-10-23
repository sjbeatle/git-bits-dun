import { Request, Response } from 'express';
import { Todo } from '../db';

export const todosGetAllController = async (req: Request, res: Response) => {
  try {
    const result = await Todo.find().exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
