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