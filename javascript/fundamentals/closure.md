A closure is a function that remembers and can access variables from its outer (parent) scope even after the outer function has finished executing.


const outer = () => {
    let count = 1;

    const inner = () => {
        console.log(count);
        count++;
    };

    return inner;
};

const innerFunc = outer();

innerFunc(); // 1
innerFunc(); // 2