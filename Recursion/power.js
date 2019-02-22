function power(base, exponent) {
  let result;

  function helper(base, exponent) {
    if (exponent <= 0) return result;
    result += base + base;
    helper(base, exponent - 1);
  }

  helper(base, exponent);
  return result;
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
