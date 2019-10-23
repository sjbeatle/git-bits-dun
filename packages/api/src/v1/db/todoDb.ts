import { config } from 'dotenv';
import mongoose, { Schema, Model, model } from 'mongoose';
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
  todo: { type: String, required: true },
  priority: { type: Boolean },
  createdDate: { type: String },
  updatedDate: { type: String },
});

export const Todo: Model<ITodo> = model<ITodo>("todo", TodoSchema);

export const todoDbConnect = () => {
  mongoose.connect(
    mongoUri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
    },
  )
    .then(() => console.log('DB Connected!'))
    .catch((er: any) => console.log(`DB Connection Error: ${er.message}`));
}
