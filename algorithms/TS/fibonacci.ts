// const fibonacci = (n: number) => {
//   let a = 0;
//   let b = 1;
//   let c;

//   for (let i = 2; i <= n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// };

// console.log(fibonacci(10));
// console.log(fibonacci(100));

let memo: number[] = [];
let count = 0;

const fibonacci = (n: number) => {
  count++;
  if (memo[n] !== undefined) return memo[n];
  if (n === 1 || n === 0) return n;
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}

console.log(fibonacci(30));
console.log(count);