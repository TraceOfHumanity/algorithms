const fibonacci = (n: number) => {
  let a = 0;
  let b = 1;
  let c;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
};

console.log(fibonacci(10));
console.log(fibonacci(100));