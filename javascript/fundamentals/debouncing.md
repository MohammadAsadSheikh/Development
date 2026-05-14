Debounce
Definition

Debounce delays function execution until user stops triggering the event.

Real Use Cases
Search input
API optimization
Autocomplete
Resize events
How Debounce Works
User types
↓
Old timer cleared
↓
New timer starts
↓
User stops typing
↓
Function executes
Debounce Implementation
const debounce = (fn, delay) => {

  let timer;

  return (...args) => {

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);

  };
};
Important Concept
clearTimeout(timer)

removes previous timer so only latest execution happens.