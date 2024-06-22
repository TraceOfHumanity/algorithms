export const initializeNumberArray = (array, size) => {};

export const initializeRandomNumberArray = (array: number[], size: number) => {
  const arr = array;
  for (let i = 0; i < size; i++) {
    arr[i] = Math.random() * 100;
  }
  return arr;
};
