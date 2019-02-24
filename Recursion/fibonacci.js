function fib(num) {
  const sequence = [0, 1];
  let counter = 1;

  function helperFib(num1) {
    if (counter === num) return;
    const nextNum = sequence[0] + sequence[1];
    sequence[0] = sequence[1];
    sequence[1] = nextNum;
    counter++;
    helperFib(num1);
  }

  helperFib(num);
  return sequence[1];
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
