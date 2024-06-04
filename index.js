//Create a function using ES5 that takes two numbers and a math operator (+ , -, /, *) and will perform a calculation
// with the given numbers.
//Ex: Cal(2, "+", 3) the output is 5

function calNum(num1, operator, num2) {
    if(operator == "+") return num1+num2
    if(operator == "-") return num1-num2
    if(operator == "*") return num1*num2
    if(operator == "/" && num2 !=0) return num1/num2
    else return "Can not divide by 0!"
}

//Use switch

function calNum3(num1, operator, num2) {
    switch(operator) {
        case "+":
           return num1+num2
            break;
        case "-":
            return num1-num2
            break;
        case "*":
            return num1*num2
               break;
        case "/":
            if(num2 === 0) return "Can not divide by 0!"
            return num1/num2
        
        default: return false
        break;
        }
}
//console.log(calNum3(5, "*", 5))

// Rewrite the above code in ES6
const calNum2 = (num1, operator, num2) => operator+num2 === "/0" ? "Can not divide by 0!" : eval(num1+operator+num2)

//console.log(calNum(5, "/", 0))

//Create an array rote the values clockwise by one
// The last value is going to be the first value
//rotateArray([20, 15, 26, 22, 30]) -> [30, 20, 15, 26, 22]

function rotateArray(arr) {
 let lastValue = arr.pop()
 arr.unshift(lastValue)
 return arr
}

//console.log(rotateArray([20, 15, 26, 22, 30]))
//ES6 time

const rotateArray2 = arr => (arr.unshift(arr.pop()), arr)

//console.log(rotateArray2([20, 15, 26, 22, 30]))

// Create function that takes a given date (3/26/2024) return the day of the day of the week
// as a string.

function getDayName(day) {
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let date = new Date ()
return days[date.getDay()]
}

//console.log(getDayName(3/26/2024))
// ES6 time
const getDayName2 = day => new Date(day).toLocaleDateString("en-us", {weekday: "long"})
//console.log(getDayName2("2024-03-26"))

// Create a function that can take a flat array and change it to a nested arrays to represent
// an incremental depth level

//Ex: (nestArray([1, 2, 6, 3]) -> [1, [2, [6, [3]]]]

function nestArray(arr) {
      if(arr.length == 1) return arr
      let temp = []
      for(let i = 0; i < arr.length; i++)
        return [arr[0], nestArray(arr.slice(1))]
}
//console.log(nestArray([1, 2, 6,]))

const nestArray2 = arr => arr.length === 1 ? arr : [arr[0], nestArray2(arr.slice(1))] //Broken

const nestArray3 = arr => (
    arr.slice(0, -1).reduceRight((arr, e) => [e, arr], [arr.pop()]) //Broken
)
//console.log(nestArray3([1, 2, 6, 3]))

// Create a function that takes two dates and returns the number of days between the first
// and second date.

/*NOTE - Ex:  getNumbers(
    new Date("March 26 2024")
    new Date("March 30 2024")

) */

/*var getDays(days) {
    return new Date(date2 - date1).getDate() - 1
}*/ // not working as ES5

// ES6
const getDays = (date1, date2) => {
    return new Date(date2 - date1).getDate() - 1
}
console.log(getDays(
    new Date("March 26 2024"),
    new Date("March 30 2024")))




    // 23-05-2024

    // write a function that counts int numbers of digits
//intCount(303) -> 3
// intCount(1503) -> 4

const countDigits = (int) => {
    return (int.toString()).length
}

// number of numbers in a given number
// negative numbers

/*
transform each number into a + number, turn that number into a string
split and count the array length to return the number of numbers
*/

// 1- Find the absolute value of number passed in the function and set that to variable.
// 2- Turn the number into string.
// 3- Return the length of numbers. 

function intCount(n) {
    let positive = Math.abs(n)
    let numString = positive.toString
    return numString.length
}

const digiCount = (n) => {
    if(Number.isInteger(n)) {
    if(n > 0) {
        let digits = 1
        while(n > 10) {
            digits++
            n/= 10
        }
        return digits
    } else if (n < 0) {
        let digits = 1
        while(n < -10) {
            digits++
            n/= 10
        }
        return digits
    } else {
        return 1
    }
    }
}
console.log(intCount(654816))

/* 
1- Create a function that takes an array of int as an argument and returns the same array
in ascending order using sort() method.
2- You have to sort the array creating ES5 own algorithum 
*/

const numArray = [8,5,6,7,1,2,8,6,9,3];
numArray.sort(function(a, b) {
  return a - b;
});

console.log(numArray);


// Write a function to rotate an array either left or right 
// according to a number provided in the function

/*
SampleArray([0,1,2,3,4,5,6,7], 2) -> [6,7,0,1,2,3,4,5]
*/

/*const arr = [0,1,2,3,4,5,6,7,8,9];
const flip = arr.reverse(2);
console.log(flip)*/ // no worky

function rotateArray(arr, num) {
    let result = arr
    for(let i = 0; i<num; i++) {
        let firstNumber = arr.pop()
        arr.unshift(firstNumber)
        result = arr
    }
    return result
}

console.log(rotateArray([1,2,3,4,5,6],4))


// Create a function that takes an array of values, removes all duplicate values and return a new
// array in the same order as the old array (only strings and numbers)

const removeDupes = [1,1,2,3,3,4,5,5,6,7,7,8,9,9];
const uniqueSet = new Set(removeDupes);
const 