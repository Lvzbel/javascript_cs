// Multiple Pointers - countUniqueValues
//
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the
// unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

const countUniqueValues = (array) => {
  // If the array is empty it will exit early returning 0
  if(array.length === 0) {
    return 0;
  }

  let i = 0;
  let j = 1;
  while(j < array.length) {
    if (array[i] === array[j]) {
      j++;
    } else if (array[i] !== array[j]) {
      i++;    
      array[i] = array[j];
      j++;
    }
  }
  return i + 1;
};

// Test Examples
console.log('Should be 2: ', countUniqueValues([1,1,1,1,1,2]));
console.log('Should be 7: ', countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log('Should be 1: ', countUniqueValues([]));
console.log('Should be 4: ', countUniqueValues([-2, -1, -1, 0, 1]));
