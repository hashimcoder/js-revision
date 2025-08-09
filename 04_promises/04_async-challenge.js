// await also creates the microtask queue like .then()

//In JavaScript, async functions utilize both microtasks and macrotasks depending on the context of their execution.

// Microtasks: When you use await inside an async function, the promise resolution is queued in the microtask queue.
// Microtasks are executed immediately after the current execution context finishes, before moving on to macrotasks.
// Microtask only happens if it uses await or .then() 

//Synchronous code → Call Stack first.
//Promises / await → Microtask queue, run right after sync code finishes.
// Timers, I/O, events → Macrotask queue, run after microtasks are cleared.
// Pending → The initial state (waiting for result).

// Fulfilled → The operation completed successfully (resolve() called).

// Rejected → The operation failed (reject() called).


console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

(async function() {
  console.log("D");
  await null;
  console.log("E");
})();

console.log("F");

const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Data recieved successfully");
    } else {
        reject("Data not recieved");
    }
})

myPromise.then((data) => console.log("right",data))
.catch((erro) => console.log("wrong",erro))
.finally(() => console.log("finally"))



