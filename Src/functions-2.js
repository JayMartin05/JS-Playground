// Create a function that takes an array and return types of the elements (data types) in a new array
//example: arrTypes([1,3, "Ali", []]) -> ["number", "number", "string", "object"]

//ES5
function arrTypes(arr) {
    let newArray = []
    for(let i = 0; i<arr.length; i++) {
        newArray[i] = typeof(arr[i])
    }
    return newArray
}

//console.log (arrTypes([ "cat", 1 , 3, "beer"]))

// ES6

const arrTypesNew = arr => arr.map(x => typeof x)


// The map() method of Array instances creates a new array populated with the results of calling a provided
// function on every element in the calling array.

//difference between ES5 and ES6 https://www.geeksforgeeks.org/difference-between-es5-and-es6/

//Create a function that takes 2-D arrays and returns the sum of min values in each row
/*
Ex: sumMin Arrays([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14]
])
output -> 1+6+11 = 18
*/

function sumMinArrays(arr) {
    let sumTotal = 0;

    for(let i = 0; i < arr.length; i++) {           // outter array
        let y = arr[i][0]                           // gives 1st value in each inner array
        for(let x = 0; x<arr[i].length; x++) {      //for loop for the y axis x is less than the outter array
            if(y > arr[i][x]) {                     
                y = arr[i][x]
}

        }
        sumTotal += y                               // sumTotal = sumTotal + y
}
return sumTotal                                     // =18
}


/*console.log(sumMinArrays([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14]
]))*/

//ES6 version
const sumMinArraysNew = arr => arr.reduce((a,b) => a + Math.min(...b),0)
// . . . is called a spread operator and reduce 

/*console.log(sumMinArraysNew([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14]
]))*/



// create a function that takes an array, return duplicate numbers in new array.
//EX: ArrayDuplicateNumbers ([1,2,3,4,5,6,5,1]) output -> [5,1]

/*function ArraysDuplicateNumbers(arr) {

    let duplicateNumber []
    for()
}
Below is the ES6 version
*/
const ArraysDuplicateNumbers = arr => (
    arr = [...new Set([...arr.filter(num => // 
        arr.indexOf(num) !== arr.lastIndexOf(num)
)])].sort((a,b) => a-b), // key to unlocking ES5
    arr.length ? arr: null
)

//console.log(ArraysDuplicateNumbers([1,2,3,4,3,6,1]))

// Below is the ES5 version

/*function ArrayDuplicateNumbers(arr) {
    let duplicateNumber = [];
    for(let i = 0; i<ArrayDuplicateNumbers.length; i++) {
        for (let d = i + 1; d < arr.length; d++) {
            if(arr[i] === arr[d] && !duplicateNumber.includes(arr[i])) {
                duplicateNumber.push(arr[i]);
            }
        }
    }
    return duplicateNumber
}*/



// Create a function that takes an array of numbers or letter and return a string.
//arrayToString([6,7,"Jay","Sonny",10]) -> "12345"

function arrayToString(arr) {
    let result = ""
    for(let i = 0; i < arr.length; i++) {
        result = result + arr[i]
    }
    return result
}
//console.log(arrayToString ([6,7,"Jay","Sonny",10]))

// Create a function that takes an array with numbers, transform that array into a mirror.
//arrayToMirror([0,2,4,6,8]) output -> [0,2,4,6,8,6,4,2,0]
//ES5
/*function arrayToMirror(arr) {
    for(let i = arr.length-2; i>=0; i--) { //-- is desending
        arr.push(arr[i])
}
return arr
}*/
//ES6
const toMirror = arr => [...arr, ...arr.reverse().slice(2)]
//console.log(toMirror([0,2,4,6,8]))

// Create a function that returns the total number of arrays inside a given array.
// totalOfArrays([[1,2,3],[4,5,6]]) -> total number of arrays = 2

function totalOfArrays(arr) {
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            count++
        }
    }    
    return count
}
//console.log(totalOfArrays([[1,2,3],[4,5,6]]))

// Create a function that takes a number as an argument and returns an array of number
//counting down from the given number to zero.

//EX: arrayCountDown(5) output -> [5,4,3,2,1,0]

/*function arrayCountDown(num) {
    let array = []
    for(let i = num; i >= 0; i--) {
        array.push(i)
    }
    return array
}
console.log(arrayCountDown(10))*/

//ES6
const countDownArray = (num) => Array.from(Array(num+1).keys()).reverse()
console.log(countDownArray(10))