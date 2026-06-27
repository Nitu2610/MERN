// Q1- Check if an array contains duplicates
// let arr = [1, 2, 3, 1];
// let seen = new Set();

// for (let ele of arr) {
//   if (!seen.has(ele)) {
//     seen.add(ele);
//   } else {
//     console.log(` The array has duplicate.`);
//   }
// }
// ------------------------------------------------
// // Q2- Count unique elements
// let arr =[1,1,2,2,3,4]
// let seen = new Set();

// for (let ele of arr) {
//     seen.add(ele);
// }
// console.log(seen.size)
// ----------------------------------------------------
// // Q3- Remove duplicates from an array
// let arr = [1, 1, 2, 3, 3];
// let seen = new Set();
// let res = [];
// for (let ele of arr) {
//   if (!seen.has(ele)) {
//     seen.add(ele);
//     res.push(ele);
//   }
// }
// console.log(res);
// ----------------------------------------------------
// Q4- Find the first duplicate element
// let arr = [1, 3, 5, 2, 3, 8];
// let seen = new Set();

// for (let ele of arr) {
//   if (seen.has(ele)) {
//      console.log(ele);
//        break;
//   }  
// seen.add(ele);
// }
// ---------------------------------------------------
// Q5- Check if two arrays have at least one common element - I dont know how to fix, kindly help. I didnt work on it. 

// let a = [1,2,3], b = [5,6,2] ;
// let seen = new Set(a);


// for (let ele of b) {
//   if(seen.has(ele)){
//     console.log('There is a common number', ele);
//     break;
//   }
// }

// ---------------------------------------------------
 // Q6- Find the intersection of two arrays

// let a = [1,2,3,4], b = [3,4,5]

// let seen = new Set(a);
// let  res = [];
// for(let ele of b){
//   if(seen.has(ele)){
//     res.push(ele)
//   }
// }

// console.log(res)
// -----------------------------------------------

// Q7- Find the union of two arrays
// let a = [1,2,3], b = [3,4,5]

// let seen = new Set([...a,...b]);
// console.log([...seen])
//-------------------------------------------------
// Q8- Find elements present in first array but not second
// let a = [1,2,3,4],
// b = [2,4]


// let seen = new Set(b);

// let  res = [];
// for(let ele of a){
//   if(!seen.has(ele)){
//     res.push(ele)
//   }
// }

// console.log(res)
// ----------------------------------------------------
// Q9 -Check if one array is a subset of another

// let a = [1,2,3,4,5], b = [2,4]
// let seen = new Set(a);
// let isSeen=true;
// for(let ele of b){
//   if(!seen.has(ele)){
//    isSeen=false;
//     break;
//   } 
// }
// ----------------------------------------------------
// Q10 - Find all duplicate elements
// let a = [1, 2, 3, 1, 2, 4, 5, 4];

// let seen = new Set();
// let res = new Set();

// for (let ele of a) {
//   if (seen.has(ele)) {
//     res.add(ele);
//   } else {
//     seen.add(ele);
//   }
// }
// console.log(res);
// ----------------------------------------------------
// Q11 - Longest Consecutive Sequence


// ----------------------------------------------------
// Q12 - 





