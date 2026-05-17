// Move Zeroes
// Problem Statement

// Given an integer array nums, move all 0s to the end of the array while maintaining the relative order of the non-zero elements.

// You must do this:

// in-place
// without making a copy of the array

// Example

// Input:

// [0,1,0,3,12]

// Output:

// [1,3,12,0,0]


const arr = [0, 1, 0, 3, 12];

const moveZeroAtRight = () => {
    let j = 0;

    // Move non-zero elements forward
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[j] = arr[i];
            j++;
        }
    }

    // Fill remaining positions with 0
    while (j < arr.length) {
        arr[j] = 0;
        j++;
    }

    console.log(arr);
}

moveZeroAtRight();


const arr = [0, 1, 0, 3, 12];

const moveZeroAtRight = () => {
    let j = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 0) {

            [arr[i], arr[j]] = [arr[j], arr[i]];

            j++;
        }
    }

    console.log(arr);
}

moveZeroAtRight();