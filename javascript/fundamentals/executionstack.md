Execution Context
Definition

Execution Context is the environment where JavaScript code executes.

JavaScript creates execution contexts for:

global code
function calls
Types of Execution Context
Global Execution Context

Created when JavaScript file starts running.

Function Execution Context

Created whenever a function is called.

Example
console.log("Start");

function greet() {
  console.log("Hello");
}

greet();

console.log("End");
Execution Flow
Global Context Created
↓
greet() added to call stack
↓
greet() executed
↓
removed from stack