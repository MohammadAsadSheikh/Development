 what is scope ?
 it's a way to define variable in the block.

we have three types of scope
global : variable which is declare ouut side the function and can access in the function
fuunction : variable which is declare in fucntion 
block : varible which is declare in block

 var is function scope
 let and const are blocked scope.


 Scope in JavaScript

Scope determines where a variable can be accessed in the code.

It defines the visibility and lifetime of variables.

Types of Scope
1. Global Scope

A variable declared outside any function or block belongs to the global scope.

It can be accessed from anywhere in the program.

let name = "Asad";

function greet() {
    console.log(name);
}

greet(); // Asad
2. Function Scope

Variables declared inside a function can only be accessed within that function.

function test() {
    var message = "Hello";
    console.log(message);
}

test();

// console.log(message); // ReferenceError

var is function-scoped.

3. Block Scope

Variables declared inside a block {} are only accessible inside that block.

{
    let age = 20;
    const city = "Bangalore";

    console.log(age);
    console.log(city);
}

// console.log(age); // ReferenceError

let and const are block-scoped.