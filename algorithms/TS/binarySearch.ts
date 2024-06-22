const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chartsArray: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

const binarySearch = (array, item) => {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    }
    if (item > array[middle]) {
      start = middle + 1;
    }
  }
};

console.log(binarySearch(numberArray, 3));
console.log(binarySearch(chartsArray, "h"));
