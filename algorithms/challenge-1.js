// Implement an array that takes an array and returns the num of truthy values
// Steps
// 1. Loop through the array
// 2. Add all truthy values in an empty array
// 3. Return the length of the new array

function countTruthy(arr) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2.length);
}

<<<<<<< HEAD
countTruthy(['', 3, 0, 30, 7])

module.exports = countTruthy;
=======
module.exports = countTruthy;
>>>>>>> 4c07713593fa401df7670faa8eeb6741ac37be4c
