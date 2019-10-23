import { Request, Response } from 'express';
import { Todo } from '../db';

export const todosDeleteAllController = async (req: Request, res: Response) => {
  try {
    const result = await Todo.deleteMany({}).exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
