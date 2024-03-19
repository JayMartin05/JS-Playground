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


console.log(sumMinArrays([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14]
]))