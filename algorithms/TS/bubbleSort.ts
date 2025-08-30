// n × n = n²
function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

// n + (n-1) + (n-2) + ... + 1 = n(n+1)/2
function bubbleSort2(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4, 2, 3, 5, 1]));
console.log(bubbleSort2([4, 2, 3, 5, 1]));