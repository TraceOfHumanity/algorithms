const numberArr: number[] = [
  0, 3, 4, 5, 62, 1, 53, 2, 5, 4, 5, 7, 5, 3, -21, -9, -67,
];

const bubbleSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
};

console.log(bubbleSort(numberArr));
