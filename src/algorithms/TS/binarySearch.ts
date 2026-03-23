// const numbersList: number[] = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
// ];
let iterationCount = 0;

const binarySearch = (array: number[], item: number) => {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;

  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2);
    iterationCount++;

    if (array[middle] === item) {
      found = true;
      return middle;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return null;
};

console.log(binarySearch(Array.from({ length: 1000000 }, (_, i) => i), 4));
console.log(iterationCount);
