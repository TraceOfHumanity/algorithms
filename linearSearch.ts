const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const linearSearch = (array: any[], item: any) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return null;
};

console.log(linearSearch(numberArray, 5)); // 4
console.log(linearSearch(numberArray, 10)); // null
