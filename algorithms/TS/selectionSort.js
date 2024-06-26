const numberArr = [
  0, 3, 4, 5, 62, 1, 53, 2, 5, 4, 5, 7, 5, 3, -21, -9, -67, -8, -54, -3,
];

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) { 
        indexMin = j;
      }
    }

    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
};

console.log(selectionSort(numberArr));