Generics
Definition

Generics allow creating reusable and type-safe components, functions, and classes.

They help write flexible code without losing type safety.

Why Generics?

Without generics:

const getData = (data: string) => {
  return data;
};

This function only works for strings.

Need separate functions for:

numbers
objects
arrays

Generics solve this problem.

Generic Function
const getData = <T>(data: T): T => {
  return data;
};
Explanation
<T>

is a placeholder type.

TypeScript replaces T with actual type.

Example Usage
console.log(
  getData<string>("Asad")
);

console.log(
  getData<number>(25)
);
Generic Array Example
const getArray = <T>(
  items: T[]
): T[] => {

  return items;
};
Real React Example
useState<string>("")

React hooks also use generics.

Advantages of Generics
reusable code
type safety
scalability
cleaner code
better autocomplete