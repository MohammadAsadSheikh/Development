// Interface

interface User {
  id: number;
  name: string;
  age?: number;
}

// Object using interface

const user1: User = {
  id: 1,
  name: "Asad",
  age: 25
};

const user2: User = {
  id: 2,
  name: "Ali"
};

console.log(user1);
console.log(user2);

// Readonly property

interface Product {
  readonly productId: number;
  title: string;
}

const product: Product = {
  productId: 101,
  title: "Laptop"
};

console.log(product);