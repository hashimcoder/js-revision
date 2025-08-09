//A Promise is an object that represents a value that may not be ready yet, but will be available in the future. 
// it can be fulfilled (resolved) or rejected.
//A Promise is a proxy for a value not necessarily known when the Promise object is created. 
// This value might be available now, or might be available in the future when the Promise is settled. 
// You can attach callbacks to a Promise to be executed when the value is available.



const promise = new Promise((resolve,reject) => {
    resolve("This is a resolved promise")
    reject("This is a rejected promise")
})

console.log(promise)

console.log("start")

setTimeout(() => {
    console.log("This will execute last")
}, 0);

Promise.resolve(() => {
    console.log("This will execute first")
})
.then(() => {
    console.log("This will execute last")
})
.then(() => {
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
}   
)

