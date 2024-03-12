//section - JavaScript Arrays

//NOTE - Arrays are a special type of object that can access through numbers from zero up to N-1
let arr = []

arr = ["Jay", 1, "Food", 100]//NOTE - differant types of data can be store as examples show <---
//console.log(arr[2]) //NOTE - how to access 'Food'

//NOTE - push() pop()
//SECTION -  push() adds a new item to the end of an array
arr.push("Joe") //NOTE - added Joe to the array
//console.log(arr)

//SECTION - pop() =  removes an item from the end of an array

let lastItem = arr.pop() 
//console.log(lastItem) //NOTE - removed 'Joe' from end of array
//console.log(arr)

//ANCHOR - JavaScript For loop, the best way to iterate any array mathmatically through a 'for' loop.
//console.log(arr.length)
for(let i = 0; i<arr.length; i++){ //NOTE - 
//console.log(i, arr[i])//NOTE - shows the number for each item in array
}
//SECTION - unshift() = add an item to the beginning of an array
arr.unshift("apples")
//console.log(arr)

//NOTE - shift() = remove an item from the beginning of an array
let firstItem = arr.shift()
//console.log(firstItem)
//console.log(arr)

//ANCHOR - JavaScript Iterators
let a = [-5, -4, -3]
let b = 0
let c = [12, 13, 14]

//NOTE - concat() method which is used to join two or more arrays.
let result = a.concat(b, c) //NOTE - Concat joins the arrays together
//console.log(result) //NOTE - noted out previous console.log's to clear terminal for this console.log

let numbers = [2, 4, 7, 8, 9]

let isEven = (num) => {
    if(num % 2 == 0) {
        //console.log(num + "is even number")
        return
    } else {
        //console.log(num + "is odd number")
        return false
    }
}

console.log(isEven(numbers))
//NOTE - my own words describing above????
console.log(numbers.every(isEven))

console.log(numbers.some(isEven))

for(let j= 0; j < numbers.length; j++) {
    let temp = numbers[j]
   if (temp % 2 == 0)
   console.log(temp + " is even number")
else {
    console.log(temp + " is an odd number")
}
}