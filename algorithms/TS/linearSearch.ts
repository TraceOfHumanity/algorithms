const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chartsArray: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

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
console.log(linearSearch(chartsArray, "a")); // 0
console.log(linearSearch(chartsArray, "f")); // 5

