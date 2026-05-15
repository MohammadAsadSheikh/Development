const syn = "{[()]}"

const isValid = () => {
    const map = {
        "}": "{",
        "]": "[",
        ")": "("
    };

    const stack = [];

    for (let char of syn) {
        if (char === "{" || char === "[" || char === "(") {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid())