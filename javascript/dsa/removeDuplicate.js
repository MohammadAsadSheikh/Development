const removeDuplicate = () => {
    const arr = [1, 2,2, 3, 2, 5, 3, 6] 
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp

            }
        }
    }

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j]
        }
    }
  
    return arr
}
console.log(removeDuplicate())
