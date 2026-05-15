
const mergeArr = () => {
    const arr1 = [1, 2, 4]
    const arr2 = [1, 3, 4]
    const arr3 = []

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr3.push(arr1[i]) 
            i++
        } else {
            arr3.push(arr2[j])
            j++;
        }
    }

    while (i < arr1.length) {
        arr3.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        arr3.push(arr2[j])
        j++
    }
    console.log(arr3)
    
}
mergeArr() //[1,1,2,3,4,4]