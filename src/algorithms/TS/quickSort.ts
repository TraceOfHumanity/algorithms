// const numberArr: number[] = [
//   0, 3, 4, 5, 62, 1, 53, 2, 5, 4, 5, 7, 5, 3, -21, -9, -67,
// ];

// const quickSort = (array: number[]) => {
//   if (array.length <= 1) {
//     return array;
//   }

//   let pivotIndex = Math.floor(array.length / 2);
//   let pivot = array[pivotIndex];
//   let less = [];
//   let greater = [];

//   for (let i = 0; i < array.length; i++) {
//     if(i === pivotIndex){
//       continue
//     }  
//     if (array[i] < pivot){
//       less.push(array[i])
//     } else {
//       greater.push(array[i])
//     }
//   }

//   return [...quickSort(less), pivot, ...quickSort(greater)];
// };

// console.log(quickSort(numberArr));

const swap = (array: number[], index1: number, index2: number) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

const pivot = (array: number[], pivotIndex: number = 0, endIndex: number = array.length - 1) => {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
}

const quickSort = (array: number[], left: number = 0, right: number = array.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

let myArray = [4, 6, 1, 7, 3, 2, 5];
console.log(quickSort(myArray));