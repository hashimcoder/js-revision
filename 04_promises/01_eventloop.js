
// Event Loop Algorithm



// 1. Call Stack —
// Where synchronous (normal) code runs, line by line.
//Only one thing runs at a time.
//When a function finishes, it’s removed from the stack.

// 2.Callback Queue (Macrotask Queue) —
//Holds async callbacks like setTimeout, setInterval, DOM events, etc.
//These tasks wait until the call stack is empty, then run in order.

// 3.Microtask Queue —
//Holds Promise callbacks.
//These tasks wait until the call stack and callback queue are empty, then run in order.
//Runs before macrotasks, right after the current synchronous code is done.

 
console.log('start'); // call stack

setTimeout(() => console.log('timeout'), 0); // macrotask

Promise.resolve().then(() => console.log('promise')); //microtask

console.log('end');

// // output
// // start
// // end
// // timeout
// // promise




console.log("A") // call stack synchronous


 setTimeout(() => {
    console.log("B")    
    
 }, 0);  // macrotask run last

 Promise.resolve().then (() => console.log("C")) // microtask run before macrotask

 console.log("D") // call stack synchronous

// output
// A
// D
// C
// B

console.log("This will execute first")
 setTimeout(()=> {
    console.log("This will execute last")
 },0)
 Promise.resolve().then(() => {
    console.log("This will execute third")
 })
 .then(() => {
    console.log("This will execute fourth")
 })
 .then(() => {
    console.log("This will execute fifth")
 })
 .then(() => {
    console.log("This will execute sixth")
 })



