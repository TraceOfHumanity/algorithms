const randomNumbersArray = [4, 1, 3, 7, 2, 5, 6];
let iterationCount = 0;

const selectionSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      iterationCount++;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
};

console.log(selectionSort(randomNumbersArray));
console.log(iterationCount);
