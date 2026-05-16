Type Aliases
Definition

Type aliases create reusable custom types.

Example
type User = {
  name: string;
  age: number;
};
Usage
const user: User = {
  name: "Asad",
  age: 25
};
Function Type Alias
type AddFunction = (
  a: number,
  b: number
) => number;
Usage
const add: AddFunction = (
  a,
  b
) => {
  return a + b;
};
Why Type Aliases Useful?
reusable
scalable
readable
maintainable
Interface vs Type Alias
Interface	Type
Mainly objects	More flexible
Extendable	Supports unions
Preferred for APIs	Preferred for complex types