export const asyncTimeout = <T>(func: any, ms: number): Promise<T> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      return resolve(func());
    }, ms),
  );
};
