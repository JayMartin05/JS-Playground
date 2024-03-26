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
console.log(calNum3(5, "*", 5))

// Rewrite the above code in ES6
const calNum2 = (num1, operator, num2) => operator+num2 === "/0" ? "Can not divide by 0!" : eval(num1+operator+num2)

//console.log(calNum(5, "/", 0))