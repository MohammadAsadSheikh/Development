Closure is a function, haviuung access to the child scope, even after the parent function has been closed.

const outer = () => {
    var count = 1;
    const inner = () => {
        console.log(count)
        count++
    }
    return inner;
}

const innerFunc = outer();
innerFunc();
innerFunc();