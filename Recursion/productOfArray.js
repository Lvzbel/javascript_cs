function productOfArray(nums) {
  let result = 1;
  let arr = [...nums];

  function helperProduct(nums1) {
    if (nums1.length === 0) return;
    result *= nums1[0];
    arr = arr.splice(1);
    helperProduct(arr);
  }

  helperProduct(nums);
  return result;
}
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
