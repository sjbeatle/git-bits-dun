
export const timeRemaining = (timer: string): number => {
  if (!timer) {
    return 0;
  }

  const now = new Date();
  const then = new Date(timer);

  return then.getTime() - now.getTime();
};
