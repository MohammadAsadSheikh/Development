Type Assertions
Definition

Type assertions tell TypeScript:

"I know this type better."
Example
let value: unknown = "Hello";

let length =
  (value as string).length;
Important

Avoid overusing assertions.

Too many assertions reduce type safety.