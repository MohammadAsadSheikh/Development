Call Stack
Definition

JavaScript uses a stack data structure to manage execution contexts.

Stack Rule

LIFO:

Last In First Out
Example
function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Done");
}

one();
Stack Flow
Global
↓
one()
↓
two()
↓
three()

Then functions are removed in reverse order.

Stack Overflow
function test() {
  test();
}

test();

Output:

Maximum call stack size exceeded

Reason:
Infinite recursion fills the stack forever.