import { Request, Response } from 'express';
import { Todo } from '../db';

export const todosDeleteController = async (req: Request, res: Response) => {
  try {
    const result = await Todo.deleteOne({ _id: req.params.id }).exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
