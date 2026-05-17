// Problem Statement

// Given two integer arrays nums1 and nums2, return an array of their intersection.

// Each element in the result must be unique
// You may return the result in any order

const intersectinFunc =(num1, num2) =>{
 let set1 = new Set(num1) 
 const result = new Set();

 for(let num of num2) {
    if( set1.has(num)) {
        result.add(num)
    }
 }
 return ([...result])
}
const num1 = [1,2,2,1]
const num2 = [2,2]
console.log(intersectinFunc(num1, num2))