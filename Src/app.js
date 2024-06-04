/* Create a function that takes three collections of arguments 
* and returns the sum of the product of numbers.
* Add the result of the first number in each collection multiplied together
* to the result of the second number in each collection

** EX// product(1, 2)(1, 1)(2, 3)
-> 1*1*2 + 2*1*3 = 8
*/

// ES5
function product(num1, num2) {
    return(num3,num4) => {
        return(num5, num6) => {
            return(num1*num3*num5) + (num2*num4*num6)
        }
    }
}
console.log(product(1,1)(1,2)(2,3))

//ES6
const productTwo = (num1, num2) => (num3, num4) => (num5, num6) => (num1*num3*num5) + (num2*num4*num6)
console.log(productTwo(1,1)(1,2)(2,3))

// Create a function that takes an array of strings and return an array, sorted from shortest to longest strings
// stringSort(['Ali', 'Kahwaji', 'NMIT']) -> ['Ali', 'NMIT', 'Kahwaji']

//ES6
const stringSort = arr => arr.sort((a,b) => a.length - b.length)

// Write a function that sums up all the values in the array
// addArrays([1,2,3,4,10,11]) -> 31

//ES5
function addArrays(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(addArrays([1,2,3,4,10,11]))