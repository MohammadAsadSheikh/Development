Promise: it always return a value which migth be , rejected, fulfilled, pending.

it better then callback, because if we are uusing callback then we can face callback hell condition, where a function is waiting for response of other and so on. so it a dead lock we can say.

Promise in JavaScript

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

A Promise has 3 states:

Pending → Initial state, operation is still running.
Fulfilled → Operation completed successfully.
Rejected → Operation failed.
Why Promises are Better than Callbacks

Promises are better than callbacks because they help avoid callback hell.

Callback Hell

Callback hell happens when multiple callbacks are nested inside each other, making the code:

difficult to read
difficult to maintain
harder to debug

Example of callback hell:

loginUser(user, () => {
    getProfile(() => {
        getPosts(() => {
            getComments(() => {
                console.log("Done");
            });
        });
    });
});

This creates deeply nested code.

Promise Example
const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data fetched successfully");
    } else {
        reject("Error fetching data");
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
Important Correction

Callback hell is not a deadlock.

A deadlock is a different concept used in operating systems or multithreading where processes wait forever for each other.

In JavaScript, callback hell simply means:

“Too many nested callbacks making code complex and unreadable.”

Short definition:

“A Promise is an object that handles asynchronous operations and can be in pending, fulfilled, or rejected state. It helps avoid callback hell and makes code cleaner and easier to maintain.”