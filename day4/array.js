const A = [1, 2, 3, 4, 5];

// Accessing elements
console.log(A[0]); // Output: 1
console.log(A[2]); // Output: 3
console.log(A[4]); // Output: 5


//accessing array like object key value
console.log(A["0"]); // Output: 1
console.log(A["2"]); // Output: 3
console.log(A["4"]); // Output: 5

//push and pop methods
A.push(6); // Adds 6 to the end of the array
console.log(A); // Output: [1, 2, 3, 4, 5, 6]

A.pop(); // Removes the last element from the array
console.log(A); // Output: [1, 2, 3, 4, 5]

//shift and unshift methods
A.unshift(0); // Adds 0 to the beginning of the array
console.log(A); // Output: [0, 1, 2, 3, 4, 5]


//splice
//slice

