import { Document } from 'mongoose';

export interface ITodo extends Document {
  todo: string;
  priority?: boolean;
  createdDate?: string;
  updatedDate?: string;
}
