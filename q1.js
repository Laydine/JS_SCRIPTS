const numbers = [ 2, 4, 5, 6, 8, 9, 10];

// Function to find even numbers in an array
function findEvenNumbers(array) {
    return array.filter(number => number % 2 === 0);
}

// Call the function with the example array
const evenNumbers = findEvenNumbers(numbers);

console.log(evenNumbers); 

const myArray = [6, 2, 3, 4, 8];

// Function to square each number and sum the squares
function sumOfSquares(array) {
    return array.reduce((sum, myArray) => sum + myArray * myArray, 0);
}

// Call the function with the example array
const result = sumOfSquares(myArray);

console.log(result);