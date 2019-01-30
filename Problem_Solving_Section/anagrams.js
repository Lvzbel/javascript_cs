/* 
 Given two strings, write a function to determine if the second string is an anagram of the first.  An anagram is a word, phrase, or name formed by rearrangin the letters of another, such as cinema, formed from iceman.
 */

//  Frequency Counters

const validAnagram = (str1, str2) => {
  // If the length is not the same, the test will fail and exit early.
  if (str1.length !== str2.length) {
    return false;
  }
  const stringOne = {};
  const stringTwo = {};

  // Create object from str1
  for (let i = 0; i < str1.length; ++i) {
    const key = str1.charAt(i);

    if (!stringOne[key]) {
      stringOne[key] = 1;
    } else {
      stringOne[key] += 1;
    }
  }
  // Create object from str2
  for (let i = 0; i < str2.length; ++i) {
    const key = str2.charAt(i);

    if (!stringTwo[key]) {
      stringTwo[key] = 1;
    } else {
      stringTwo[key] += 1;
    }
  }
  // Compare both objects by keys and quantities
  for (var key in stringOne) {
    if (!stringTwo[key]) {
      return false;
    } else if (stringOne[key] !== stringTwo[key]) {
      return false;
    }
  }

  return true;
};

//  Examples
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("qwerty", "ytrewq")); // true
