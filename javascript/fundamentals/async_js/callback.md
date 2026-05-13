Callback
it's a fuction passed as a arguument to other fuction.



const func = (name, callback) => {
    console.log(name, "of me")

    callback();
    
}

const innerFunc = () => {
    console.log("Inner Function")
}

func("Asad", innerFunc)



Callback Function in JavaScript

A callback function is a function that is passed as an argument to another function and is executed later.

Example:

const func = (name, callback) => {
    console.log(name, "of me");

    callback();
};

const innerFunc = () => {
    console.log("Inner Function");
};

func("Asad", innerFunc);
Output
Asad of me
Inner Function
How it Works
func() is called with:
"Asad" as the name
innerFunc as the callback
Inside func():
"Asad of me" is printed.
Then callback() executes innerFunc().

innerFunc() prints:

Inner Function

Short definition:

“A callback is a function passed as an argument to another function, which is executed later.”