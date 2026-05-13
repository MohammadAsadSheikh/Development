It's best of all
becuase
it's reading,
we can maintain it easily,
it will wait until the response will get.
we can only use with asyn fucntions.



async/await is one of the best ways to handle asynchronous operations because:

It improves readability of the code.
The code becomes easier to maintain.
It waits for the response before moving to the next line.
It helps write asynchronous code in a synchronous style.
await can only be used inside an async function.

Example:

async function getData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();

  console.log(data);
}
How it works
async makes a function return a Promise.

await pauses the execution of the function until the Promise is resolved.