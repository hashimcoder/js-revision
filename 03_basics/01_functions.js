// In JavaScript, functions are reusable blocks of code that perform specific tasks. 
//They allow you to write a piece of code once and call it whenever needed,
// which helps make your code more modular, manageable, and scalable. 
//Let’s dive into some key concepts and examples of functions in JavaScript:

/// Declaration of a function 

function myFunction(){
    console.log("Hello javacript")
}

myFunction()  // calling the function 

function greet(name) {
    console.log(`Hello ${name}`)
}

greet("hashim")  /// if we do not give the value in the argument it return undefined by default 
  

/// The return statement is used to return a value from a function.
// Once return is executed, the function stops running and sends the value back to the calling code.

function add(a,b) {
    return a+b
}

console.log(add(4,4))

let sum = add(4,4)
console.log(sum)    

function addTwoNumbers(number1,number2){
    
  let result = number1 + number2
    return result

}

let result  = addTwoNumbers(5,5)

console.log(result)

//Functions can also be defined as expressions, meaning they can be assigned to a variable.
// This is called a function expression.

const greeting = function(name){

   console.log( `hello ${name}`)

}
greeting("hitesh")