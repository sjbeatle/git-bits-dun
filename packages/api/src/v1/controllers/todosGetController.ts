import { Request, Response } from 'express';
import { Todo } from '../db';

export const todosGetController = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findById(req.params.id).exec();
    res.send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
};
