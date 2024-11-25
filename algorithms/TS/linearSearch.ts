const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let iterationCount = 0;

const linearSearch = (array: number[], item: number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
    // iterationCount++;
  }
  return null;
};

console.log(linearSearch(numbers, 15));
console.log(iterationCount);