// Array of strings

const names: string[] = [
  "Asad",
  "Ali",
  "Ahmed"
];

console.log(names);

// Array of numbers

const scores: number[] = [90, 85, 100];

console.log(scores);

// Interface for objects

interface Employee {
  id: number;
  name: string;
}

// Array of objects

const employees: Employee[] = [
  {
    id: 1,
    name: "Asad"
  },
  {
    id: 2,
    name: "Ali"
  }
];

console.log(employees);

// Nested object

interface Address {
  city: string;
  country: string;
}

interface Customer {
  name: string;
  address: Address;
}

const customer: Customer = {
  name: "Asad",
  address: {
    city: "Mumbai",
    country: "India"
  }
};

console.log(customer);