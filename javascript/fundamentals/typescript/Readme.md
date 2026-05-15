# TypeScript Fundamentals

## What is TypeScript?

TypeScript is a strongly typed superset of JavaScript developed by Microsoft.

It adds:
- static typing
- interfaces
- type safety
- better tooling
- compile-time error checking

TypeScript code compiles into normal JavaScript.

---

# Why Use TypeScript?

JavaScript is dynamically typed, which can cause runtime errors.

Example in JavaScript:

```js
let age = 25;

age = "Asad";
```

This is allowed in JavaScript.

In TypeScript:

```ts
let age: number = 25;

age = "Asad"; // Error
```

TypeScript catches errors before runtime.

---

# Advantages of TypeScript

- Better code readability
- Early error detection
- Improved IDE support
- Safer large-scale applications
- Easier refactoring
- Better developer experience

---

# TypeScript Compilation

TypeScript files use:

```txt
.ts
```

extension.

Compile TypeScript:

```bash
tsc filename.ts
```

This generates:

```txt
filename.js
```

Run JavaScript file:

```bash
node filename.js
```

---

# Topics Covered

---

# 1. Basic Types

File:
```txt
basic-types.ts
```

Covers:
- number
- string
- boolean
- arrays
- object
- any
- unknown
- null
- undefined

Example:

```ts
let age: number = 25;
let username: string = "Asad";
let isLoggedIn: boolean = true;
```

---

# 2. Functions

File:
```txt
functions.ts
```

Functions in TypeScript support:
- parameter types
- return types
- optional parameters
- default parameters

Example:

```ts
const add = (a: number, b: number): number => {
  return a + b;
};
```

### Optional Parameter

```ts
const greet = (name?: string) => {
  console.log(name);
};
```

### Default Parameter

```ts
const welcome = (
  name: string = "Guest"
) => {
  return name;
};
```

---

# 3. Interfaces

File:
```txt
interfaces.ts
```

Interfaces define the structure of objects.

Example:

```ts
interface User {
  id: number;
  name: string;
}
```

Usage:

```ts
const user: User = {
  id: 1,
  name: "Asad"
};
```

---

## Optional Properties

```ts
interface User {
  name: string;
  age?: number;
}
```

`?` means property is optional.

---

## Readonly Properties

```ts
interface Product {
  readonly id: number;
}
```

Readonly properties cannot be modified.

---

# 4. Union Types

File:
```txt
union-types.ts
```

Union types allow multiple possible types.

Example:

```ts
let id: string | number;
```

Meaning:
```txt
id can be string OR number
```

---

## Literal Union Types

```ts
let status:
  | "loading"
  | "success"
  | "error";
```

Commonly used in:
- APIs
- React state
- status management

---

# 5. Arrays and Objects

File:
```txt
arrays-objects.ts
```

---

## Array of Strings

```ts
const names: string[] = [
  "Asad",
  "Ali"
];
```

---

## Array of Objects

```ts
interface Employee {
  id: number;
  name: string;
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Asad"
  }
];
```

---

# Type Inference

TypeScript can automatically infer types.

Example:

```ts
let age = 25;
```

TypeScript automatically infers:
```txt
number
```

---

# any vs unknown

## any

```ts
let data: any;
```

Disables type safety.

Avoid using frequently.

---

## unknown

```ts
let value: unknown;
```

Safer than `any`.

Requires type checking before usage.

---

# Interface vs Type

| Interface | Type |
|---|---|
| Mainly for objects | More flexible |
| Extendable | Supports unions |
| Preferred for APIs | Preferred for complex types |

---

# Real Usage of TypeScript

TypeScript is heavily used in:
- React.js
- React Native
- Next.js
- Node.js
- NestJS
- Enterprise applications

---

# Interview Questions

1. What is TypeScript?
2. Difference between TypeScript and JavaScript?
3. What are interfaces?
4. What is union type?
5. Difference between any and unknown?
6. What is type inference?
7. Why use TypeScript in React projects?

---

# Folder Structure

```txt
typescript/
│
├── basic-types.ts
├── functions.ts
├── interfaces.ts
├── union-types.ts
├── arrays-objects.ts
└── README.md
```

---

# Conclusion

TypeScript improves:
- scalability
- maintainability
- code safety
- developer productivity

It is one of the most important skills for modern frontend and backend development.