function selectionSort(array: number[]): number[] {
  let minIndex: number;
  for (let i = 0; i < array.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp: number = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}

console.log(selectionSort([4, 2, 3, 5, 1]));