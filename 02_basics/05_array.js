const numbs = [0,1,2]

numbs.push(3)
numbs.pop()
numbs.unshift(4)
console.log(numbs)
numbs.shift()
console.log(numbs)


let fruits = ["apple", "banana","mango"]

console.log(fruits.indexOf("mango"))
console.log(fruits.includes("cherry"))

// slice and splice

let arr = [10,20,30,40]
// console.log(arr.slice())  //  slice is non-destructive (returns a new array) // slice(start?,end?) // both parameter are optional 
// console.log(arr.slice(1,3))
// console.log(arr)

arr.splice(1,2,50,60) // splice(start?,deleteCount?,item1,item2....) // splice is destructive (changes the original array)
console.log(arr)

// combining and joining arrays

let a = [1,2]
let b = [3,4]
console.log(a.concat(b))
console.log(a.join(","))

let c = [...a,...b]
console.log(c)

let array1 = [1,2,4,5,6,7,7,8]
let array2 = [...new Set(array1)]  // remove the duplicate value using set method 
console.log(array2)
// iterate over an array
for (let i = 0; i < array1.length; i++){
   
    // console.log(array1[i])
}

// using for of loop 
for (let num of array1){
    // console.log(num)
}
 // using foreach loop
// array1.forEach(num => console.log(num))

// trasforming arrays

let numbers = [1,2,3,4,5]
console.log(numbers.map(num => num*2))

let evenNumbers = numbers.filter(num => num % 2 ===0)
console.log(evenNumbers)

let sum = numbers.reduce((acc,num) => acc + num,0)
console.log(sum)

let firstEven  = numbers.find(num => num % 2 === 0)
console.log(firstEven)

numbers.reverse()
console.log(numbers)

// Reverse an array without using reverse()
// using decrementing loop
 let newArr = [10,20,30,40,50,60]
 let rev = []

 for (let i = newArr.length -1; i >0; i--){
       rev.push(newArr[i])

 }
 console.log(rev)

 // reverse an array using unshift with for each loop

 let array3 = [3,4,5,6]
 let rev2 = []

 array3.forEach(num => rev2.unshift(num))
 console.log(rev2)