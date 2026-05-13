El is a mechanism that js used for async operations.
it has serveral step 

call stack where  a sync operation perform first
web queue: 
macrotask queue: it is use for timer, user click etc.
microtask queue: it is use for promise, async-await

eventloop work is to check the callback and call the sync operation firsnt then it checks the other operation if microtask and macrotask is there then it will execute microtask first cause it has first priority.. then macrotask will executes.



Event Loop in JavaScript

The Event Loop is a mechanism in JavaScript that handles asynchronous operations.

JavaScript is single-threaded, meaning it can execute only one task at a time. The event loop helps manage async tasks without blocking the main thread.

Main Parts of the Event Loop
1. Call Stack
The Call Stack executes all synchronous code first.
Functions are pushed into the stack and executed one by one.

Example:

console.log("A");
console.log("B");

Both run immediately in the call stack.

2. Web APIs / Web Queue
Async operations like:
setTimeout
DOM events
API calls
fetch

are handled by the browser's Web APIs.

After completion, their callbacks are sent to task queues.

3. Macrotask Queue (Callback Queue)

Used for:

setTimeout
setInterval
User events (click, scroll)
setImmediate (Node.js)

Example:

setTimeout(() => {
  console.log("Timer");
}, 0);

The callback goes to the macrotask queue.

4. Microtask Queue

Used for:

Promise.then()
catch()
finally()
async/await

Example:

Promise.resolve().then(() => {
  console.log("Promise");
});

The callback goes to the microtask queue.

How the Event Loop Works
Execute all synchronous code in the call stack.
Check the microtask queue and execute all microtasks first.
Then execute one task from the macrotask queue.
Repeat the process continuously.
Important Rule

Microtasks have higher priority than macrotasks.

Example:

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

Output:

Start
End
Promise
Timeout