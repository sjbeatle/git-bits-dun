let count = 0;

export function randomId(
  len: number = 5,
  chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
): string {
  count += 1;
  return Array.apply(0, Array(len))
    .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join('') + '-' + count;
}
