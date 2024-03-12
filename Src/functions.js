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
    console.log(checkArraySum([0, 2, 5]))//NOTE - this function allows any num to be entered <---- and spits out result from if or else

