const numberArr: number[] = [
  0, 3, 4, 5, 62, 1, 53, 2, 5, 4, 5, 7, 5, 3, -21, -9, -67,
];

const quickSort = (array: number[]) => {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    if(i === pivotIndex){
      continue
    }  
    if (array[i] < pivot){
      less.push(array[i])
    } else {
      greater.push(array[i])
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(numberArr));
