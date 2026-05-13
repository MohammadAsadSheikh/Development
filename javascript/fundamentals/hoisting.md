hoisting is js behaviour of moving variable and function declaration before it's execution

as we have var, let and const. all of them can be hoisted buut var is initialed as undefined and let and const will goes under TDZ cause referenceError.


console.log(count) // undefined
var count =0;

means 
var count;
console.log(count)
var count =0;


console.log(value) //reference error
let value =0;

console.log(constant) // reference error
const constant =0;