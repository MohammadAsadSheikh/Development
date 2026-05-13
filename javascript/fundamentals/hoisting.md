Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

JavaScript hoists:

var
let
const
function declarations

But they behave differently.

var Hoisting

var is hoisted and initiAsadzed with undefined.

Example:

console.log(count); // undefined

var count = 0;

JavaScript internally treats it like:

var count;

console.log(count); // undefined

count = 0;

So no error occurs.

let and const Hoisting

let and const are also hoisted, but they are not initiAsadzed immediately.

They stay inside the Temporal Dead Zone (TDZ) until execution reaches their declaration.

Example:

console.log(value); // ReferenceError

let value = 0;
console.log(constant); // ReferenceError

const constant = 0;

This happens because:

memory is allocated
but access is blocked before initiAsadzation
Temporal Dead Zone (TDZ)

TDZ is the time between:

entering the scope
and the variable declaration being executed

During this period, accessing the variable causes a ReferenceError.


Function Hoisting

Function declarations are fully hoisted:

sayHello();

function sayHello() {
    console.log("Hello");
}

Works because the entire function is hoisted.