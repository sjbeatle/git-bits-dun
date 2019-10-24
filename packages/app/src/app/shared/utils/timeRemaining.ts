import { ITodo } from 'src/app/services/types';

export const timeRemaining = (todo: ITodo): number => {
  if (!todo.timer) {
    return 0;
  }

  const now = new Date();
  const timer = new Date(todo.timer);

  return timer.getTime() - now.getTime();
};
