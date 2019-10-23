import { Request, Response } from 'express';
import { Todo } from '../db';

export const todosPutController = async (req: Request, res: Response) => {
  const now = new Date().toISOString();

  try {
    const data = { ...req.body };
    data.updatedDate = now;
    const todo = await Todo.findById(req.params.id).exec();
    if (todo) {
      todo.set(data);
      const result = await todo.save();
      res.send(result);
    } else {
      throw Error(`Todo query for "${req.params.id}" returned null`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
