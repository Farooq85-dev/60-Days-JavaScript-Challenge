// Question 21:- Flatten an Array: Write a function that takes a nested array and flattens it into a single array. For example, flatten([1, [2, [3, 4], 5], 6]) should return [1, 2, 3, 4, 5, 6].

const flattenArray = [1, [[2, 3, 4, 8, 9], 5], 4];
console.log(flattenArray.flat(2));

// Question 22:- Counting Vowels: Write a function that counts the number of vowels in a given string (case insensitive).
function calculateVowels(value) {
  const matches = value.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
const isVowel = "Farooq";
const vowelCount = calculateVowels(isVowel);
console.log(vowelCount);

// Question 22:- Random Integer Generator: Write a function that generates a random integer between two values, inclusive. For example, getRandomInt(1, 10) could return any integer between 1 and 10.

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));

// Question 23:- Group Anagrams: Given an array of strings, group the anagrams together in an array of arrays. For example, groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) should return [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]].

const groupAnagrams = ["eat", "tea", "tan", "ate", "nat", "bat"];
let anagrams = [[], [], []];
anagrams[0].push(groupAnagrams[0], groupAnagrams[1], groupAnagrams[3]);
anagrams[1].push(groupAnagrams[2], groupAnagrams[4]);
anagrams[2].push(groupAnagrams[5]);
console.log(anagrams);

// Question 24:- Write a function to check palindrome word?
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}
// Example usage
console.log(isPalindrome("anna"));

// Question 25:- Write a function to check nagram finder?
function areAnagrams(str1, str2) {
  const normalize = (str) =>
    str
      .replace(/[^a-z0-9]/gi, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

  return normalize(str1) === normalize(str2);
}
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("triangle", "integral"));
console.log(areAnagrams("apple", "pale"));
