function power(base, exponent) {
  let result = base;
  let counter = exponent;

  function helperPower(base1) {
    if (counter === 0) result = 1;
    if (counter <= 1) return;
    result *= base;
    counter -= 1;
    helperPower(base1);
  }

  helperPower(base);
  return result;
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
console.log(power(5, 4)); // 16
