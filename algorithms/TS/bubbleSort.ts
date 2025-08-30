// n × n = n²
function bubbleSort(array: number[]) {
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
}

// n + (n-1) + (n-2) + ... + 1 = n(n+1)/2
function bubbleSort2(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([4, 2, 3, 5, 1]));
console.log(bubbleSort2([4, 2, 3, 5, 1]));