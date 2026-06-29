// Q1- Frequency Counter - Count how many times each element appears.
// let arr = [1, 2, 1, 3, 2, 1];
// let mp = new Map();

// for (let key of arr) {
//   mp.set(key, (mp.get(key) || 0) + 1);
// }

// console.log(mp);

//----------------------------------------------------------

// Q2- First Non-Repeating Character - Find the first character that appears only once.
// let str = "leetcode";
// let mp = new Map();

// for (let ch of str) {
//   mp.set(ch, (mp.get(ch) || 0) + 1);
// }

// let res = null;

// for (let ch of str) {
//   if (mp.get(ch) === 1) {
//     res = ch;
//     break;
//   }
// }

// console.log(res);

//----------------------------------------------------------

// Q3- Find Duplicate Numbers - Return all numbers that appear more than once.
// let arr = [1, 2, 3, 2, 4, 1];
// let mp = new Map();
// let res = [];

// for (let num of arr) {
//   mp.set(num, (mp.get(num) || 0) + 1);
// }

// for (let [key, value] of mp) {
//   if (value > 1) {
//     res.push(key);
//   }
// }

// console.log(res);

//----------------------------------------------------------

// Q4- Two Sum - Find indices of two numbers that add up to target.
// let arr = [2, 7, 11, 15];
// let target = 9;

// let mp = new Map();

// for (let i = 0; i < arr.length; i++) {
//   let need = target - arr[i];

//   if (mp.has(need)) {
//     console.log([mp.get(need), i]);
//     break;
//   }

//   mp.set(arr[i], i);
// }

//----------------------------------------------------------

// Q5- Contains Duplicate - Check if any value appears at least twice.
// let arr = [1, 2, 3, 1];
// let mp = new Map();
// let found = false;

// for (let num of arr) {
//   mp.set(num, (mp.get(num) || 0) + 1);

//   if (mp.get(num) > 1) {
//     found = true;
//     break;
//   }
// }

// console.log(found);

//----------------------------------------------------------

// Q6- Valid Anagram - Check whether two strings are anagrams.
// let s = "anagram",
//     t = "nagaram";

// let mp = new Map();

// if (s.length !== t.length) {
//   console.log(false);
// } else {
//   for (let ch of s) {
//     mp.set(ch, (mp.get(ch) || 0) + 1);
//   }

//   let isValid = true;

//   for (let ch of t) {
//     if (!mp.has(ch)) {
//       isValid = false;
//       break;
//     }

//     mp.set(ch, mp.get(ch) - 1);

//     if (mp.get(ch) === 0) {
//       mp.delete(ch);
//     }
//   }

//   console.log(isValid && mp.size === 0);
// }

//----------------------------------------------------------

// Q7- Intersection of Two Arrays - Return unique common elements.
// let nums1 = [1, 2, 2, 1];
// let nums2 = [2, 2];

// let mp = new Map();
// let res = [];

// for (let num of nums1) {
//   mp.set(num, true);
// }

// for (let num of nums2) {
//   if (mp.has(num)) {
//     res.push(num);
//     mp.delete(num);
//   }
// }

// console.log(res);

//----------------------------------------------------------