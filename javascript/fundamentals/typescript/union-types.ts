// Union Types

let id: string | number;

id = 101;
console.log(id);

id = "EMP101";
console.log(id);

// Union in functions

const printId = (id: string | number): void => {
  console.log(`ID: ${id}`);
};

printId(1);
printId("A101");

// Literal union types

let apiStatus:
  | "loading"
  | "success"
  | "error";

apiStatus = "loading";
console.log(apiStatus);

apiStatus = "success";
console.log(apiStatus);