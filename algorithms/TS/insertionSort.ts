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

function insertionSort2(array: number[]) {
  const length = array.length
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  return array;
}

console.log(insertionSort([3, 2, 1]));
console.log(insertionSort2([3, 2, 1, 10, 6]));