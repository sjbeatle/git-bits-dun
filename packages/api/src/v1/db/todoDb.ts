import { config } from 'dotenv';
import mongoose, { Model, model, Schema } from 'mongoose';
import { ITodo } from './../types';

config();

const {
  DB_USER,
  DB_PASS,
  DB_HOST_1,
  DB_HOST_2,
  DB_PORT,
  DB,
} = process.env;
const mongoUri = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST_1}:${DB_PORT},${DB_HOST_2}:${DB_PORT}/${DB}?authSource=admin&replicaSet=replset`;

export const TodoSchema: Schema = new Schema({
  createdDate: { type: String },
  priority: { type: Boolean },
  todo: { type: String, required: true },
  updatedDate: { type: String },
});

export const Todo: Model<ITodo> = model<ITodo>('todo', TodoSchema);

export const todoDbConnect = () => {
  mongoose.connect(
    mongoUri,
    {
      ssl: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
    // tslint:disable-next-line:no-console
    .then(() => console.log('DB Connected!'))
    // tslint:disable-next-line:no-console
    .catch((er: any) => console.log(`DB Connection Error: ${er.message}`));
};
