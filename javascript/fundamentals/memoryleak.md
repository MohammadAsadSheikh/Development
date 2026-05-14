Memory Leaks
Definition

Memory leak occurs when memory is no longer needed but still not released.

Common Causes
Cause	Example
setInterval	interval not cleared
event listeners	not removed
subscriptions	sockets remain active
closures	stale references
Bad Example
useEffect(() => {

  setInterval(() => {
    console.log("Running");
  }, 1000);

}, []);

Problem:
Interval continues forever.

Correct Cleanup
useEffect(() => {

  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };

}, []);
Why Cleanup Matters

Prevents:

memory leaks
battery drain
unnecessary execution
performance issues