// Write a JavaScript function to check whether two strings are anagrams or not.

// Example:

// anagram("listen", "silent") // true
// Answer:
// Function to check anagram
const isAnagram = (str1, str2) => {

    // Step 1: Check length
    // If lengths are different, they can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Step 2: Create frequency object
    let freq = {};

    // Step 3: Count characters from first string
    for (let char of str1) {

        // If character exists, increase count
        // otherwise start with 1
        freq[char] = (freq[char] || 0) + 1;
    }

    // Step 4: Match characters from second string
    for (let char of str2) {

        // If character doesn't exist or count is 0
        // then strings are not anagrams
        if (!freq[char]) {
            return false;
        }

        // Decrease count after matching
        freq[char]--;
    }

    // Step 5: If all checks pass, return true
    return true;
};

// Function call
console.log(isAnagram("listen", "silent"));
