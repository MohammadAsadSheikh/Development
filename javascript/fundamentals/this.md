this refers to the object that calls the function.
Regular functions get their own this.
Arrow functions do not create their own this; they inherit this from the surrounding scope (lexical this).

Example with a normal function:

const user = {
  name: "Asad",
  greet: function () {
    console.log(this.name);
  }
};

user.greet(); // Asad

Here, this refers to user.

Example with an arrow function:

const user = {
  name: "Asad",
  greet: () => {
    console.log(this.name);
  }
};

user.greet(); // undefined

Why?
Because arrow functions inherit this from the outer scope, not from user.

A good practical use of arrow functions:

function Timer() {
  this.seconds = 0;

  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}

new Timer();

Here the arrow function inherits this from Timer, which is useful.

A cleaner corrected sentence for your notes:

this refers to the object that invokes the function.
Regular functions have their own this, while arrow functions do not create their own this; they inherit it from the surrounding lexical scope.