function insertionSort(array: number[]) {
  let temp: number;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort([3,2,1]));