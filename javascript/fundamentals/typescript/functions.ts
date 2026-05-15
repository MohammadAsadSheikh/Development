// Function with parameter types and return type

const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(10, 20));

// Optional parameter

const greet = (name?: string): void => {
  console.log(`Hello ${name}`);
};

greet("Asad");
greet();

// Default parameter

const welcome = (name: string = "Guest"): string => {
  return `Welcome ${name}`;
};

console.log(welcome());
console.log(welcome("Ali"));

// Function returning boolean

const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

console.log(isEven(4));
console.log(isEven(5));