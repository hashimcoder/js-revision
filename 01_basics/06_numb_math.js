const score = 200
console.log(score)

const balance = new Number(200)   // Here number is defined as object 
console.log(balance.toString().length)  
console.log(balance.toFixed(2))    /// it will take 2 value after decimal 

const otherNumb = 232.8976;
console.log(otherNumb.toPrecision(3))

const hundreds = 1000000;

console.log(hundreds.toLocaleString("en-IN"))   

/////   +++++++++++++++++++++++++++++++   Math   +++++++++++++++++++++++++ /////////////////////
/////     The Math object in JavaScript provides various mathematical functions and constants.


console.log(Math)
console.log(Math.abs(-4)) 
console.log(Math.round(4.6));  // 5 // round the number to the nearest integer 
console.log(Math.ceil(4.1));   // 5  /// round up to the nearest integer 
console.log(Math.floor(4.9));  // 4    // round down to the nearest integer 
console.log(Math.trunc(4.9));  // 4   /// Remove any fractional part of any number  
console.log(Math.min(4,5,6,7,8,9))   // find the minimum value  
console.group(Math.max(4,5,67,9))     // Return the max value 

console.log(Math.floor((Math.random()*10) +1))

const min = 10
const max = 20
 
console.log(Math.floor(Math.random() * (max - min + 1) + 10))



  