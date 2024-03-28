// Create a function that takes an array of stringafied numbers as a parameter and return an array of numbers
//Ex: ["1", "3", "6.7"] -> [1, 3, 6.7]

let arrayToNumbers = arr => arr.map (e => +e)

console.log(arrayToNumbers(["1", "3", "6.7"]))

function arrayToNumbersTwo(arr) {
let temp = []
for(let i = 0; i< arr.length; i++) {
    temp[i] = JSON.parse(arr[i])
}
return temp
} 
console.log(arrayToNumbersTwo(["1", "3", "6.7"]))

function arrayToNumbersThree(arr) {
    return arr.map(Number)
}

console.log(arrayToNumbersThree(["1", "3", "6.7"]))

// Create a function that return (true) if all parameters are thruthy and false otherwise
//Ex: checkParam(true, true, true) -> true
//Ex: checkParam(5, 1, 3, 0) -> false
// Falsy values are: false, 0 and "" 

//ES6
const checkParam = (...args) => args.every(Boolean)
console.log(checkParam(5))

/*function checkParam(string) {
    let value = false
    for(let i = 0; i < string.length; i++) {
        if(string !== 0 && string !== false && string !== "") {
            value = true
        }
    }
    return value
}

console.log(checkParam(5,1,3,1)) FUCKED*/

//ES5
function checkParamThree(param1, param2, param3, param4) {
    if(param1 && param2 && param3 && param4) {
        return true
    } else {
        return false
    }
}
console.log(checkParamThree(5,1,3,1,7,10000, 0))

// Create a function to check if an array contains a particular number
//Ex: checkArray([5,5,6], 5) -> true
//Ex: checkArray([1,3,5,7,10],2) -> false

//ES6
const checkArray = (arr, el) => {
    return arr.includes(el)
}

console.log(checkArray([5,5,6], 6, 5))

//ES5

function checkArrayTwo (arr, num) {
    if(arr.includes(num)) {
        return true
     /*else
    return false*/
}

console.log(checkArrayTwo([5,5,6], 7))