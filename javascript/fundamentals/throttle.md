Throttle
Definition

Throttle limits how often a function can execute.

Real Use Cases
Scroll events
Button spam prevention
Mouse movement
Location tracking
How Throttle Works
Run once
↓
Wait fixed delay
↓
Allow next execution
Throttle Implementation
const throttle = (fn, delay) => {

  let lastCall = 0;

  return (...args) => {

    const now = Date.now();

    if (now - lastCall >= delay) {

      lastCall = now;

      fn(...args);
    }
  };
};