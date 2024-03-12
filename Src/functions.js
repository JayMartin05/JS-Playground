function greeting() {
    //return console.log("Hello World")
    }

    //console.log(greeting()) //NOTE - () mt parentises are undefind

    //NOTE - write a function that adds any two numbers and returns the result

    function sum(a,b) {
return a+b
    }
    //console.log(sum(2, 3)) //NOTE - this returns any number I put in these brackets <----
//NOTE - write a function that takes an array, check wheter the sum of its elements is even or odd, 
//NOTE - return the value should return "even" or "odd"

function checkArraySum(arr) {
let sum = 0
for(i = 0; i < arr.length; i++) {
    sum += arr[i]
}

if(sum % 2 == 0) {
    return "even"
    } else {
        return "odd"
    }
}
    //console.log(checkArraySum([0, 2, 5]))//NOTE - this function allows any num to be entered <---- and spits out result from if or else

    //SECTION - Write a function that an array of items and returns only integers.
    //['Jay', 3, 'Ali', 5, 9] -> [3, 5, 9]

    function onlyInteger(arr) {
        let interger = []
        for (let i = 0; i < arr.length; i++) {
            if(Number.isInteger(arr[i])) {
            interger.push(arr[i])
            }
        }
        return interger

    }
    //console.log(onlyInteger(['Jay', 3, 'Ali', 5, 9]))//NOTE - integer is numbers -number decimal numbers

//SECTION - Write a function that takes an array with numbers and return an array with the elements multiplied by 2
//arrayByTwo([2, 5, 4]) -> [4, 10, 8]

function arrayByTwo(arr) {
    for(i = 0; i < arr.length; i++) {
        arr[i] *= 2
    }
    return arr
    }
//console.log(arrayByTwo([2, 5, 4]))

//oneLineArray = (arr) => arr.map(el => el * e)
const oneLineArray = (arr) => arr.map(el => el * 2)

console.log(oneLineArray([2, 5, 4]))