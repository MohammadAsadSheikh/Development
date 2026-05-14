const isDuplicate = (nums) => {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true
        }
        set.add(num)
    }

    return false
}

console.log(isDuplicate([11, 2, 3, 2, 34]))
