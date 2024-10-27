
// Array ///
//In JavaScript, an array is a data structure that allows you to store multiple values in a single variable.
// Arrays can contain any type of value (numbers, strings, objects, even other arrays),
// making them very versatile for handling collections of data. Let's go over the basics and some important array methods.



const myArray = [1, 2, 3, 4, 5, 6]
const myArray2 = ["shaktiman", "CaptainAmerica", "Nagraj"]

// Accessing array elements


// console.log(myArray[0])
let newArr = new Array("name", "age", "city")  // creating new array using constructor

// console.log(newArr)

// basic properties of array 

let array1 = [12,23,4,5,6,9]
console.log(array1)
// console.log(array1.length)     ///check the lenth of an array 
        
// add and remove the element at the end of array 

array1.push(10)     
console.log(array1)
array1.pop()
console.log(array1)

// add and remove the element at start of an array

array1.unshift(11)
console.log(array1)
array1.shift()
console.log(array1)

// Loping through an array   usring for loop
 let numbers = [1,2,3,4,5,6,7]
     for(let i = 0; i< numbers.length;i++){
        let result= numbers[i]

        console.log(result)
     }


for (const num of numbers) {     /// loping through an array by for-of loop
    console.log(num)
}

numbers.forEach((num)=>console.log(num))   /// loping through array element by forEach loop(a method that applies a function to each element)


// Array methods ///

// let doubled = numbers.map(num => num*2)    Creates a new array with the results of calling a provided function on every element
// console.log(doubled)
let doubled = numbers.map((num) => (
    num * 2
))
console.log(doubled)

let evenNumber = numbers.filter(num => num % 2 ===0)  // Creates a new array with all elements that pass a test.
console.log(evenNumber)

let sum = numbers.reduce((acc,num) => acc +  num ,0)  // Reduces the array to a single value by executing a function on each element
console.log(sum)

let firstEven = numbers.find(num => num % 2 === 0)  // Returns the first element that matches the condition.

console.log(firstEven)

console.log(numbers.includes(2))    //Checks if an array contains a specific element
console.log(numbers.includes(10))

let sliced = [2,3,4,5,]   

console.log(sliced.slice(1,3))   /// Creates a shallow copy of a portion of an array into a new array.

console.log(sliced.splice(1,3))   // Adds or removes elements from an array