// PRIMITIVE Datatypes

// 7 types: String , number , boolean , null , undefined, symbol ,bigInt 

const number = 1123;
const str = "hello"
const isloggedIn = false

const id = Symbol('123')
const anotherId  = Symbol('123')

console.log(id === anotherId)

const bigNumber = 1231423545n



// Reference dataTypes (non primitive datatypes)

// Array , Objects , Function 

const heros = ["Shaktiman" ,"Ironman" ,"CaptainAmerica"] // declaration of array 

console.log(heros[1])

const myObj = {
    name:"john",     // declaration of objects
    age:23,
    city:"rampur"
}

console.log(myObj.name)

 const myFunction = function (a,b) {

    return a+b
  
}

const add = myFunction(3,3)
console.log(add)



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ /////

//   Stack(primitive ) you get the copy whatever variable you declaired     and Heap(Non Primitive)    give the Reference of Original value
  // In JavaScript (and many programming languages), stack and heap are two places where memory is managed to store and handle data. They help the program keep track of variables, functions, and objects efficiently.



  let youTubeChannel = "chem&codedotcom"
let anotherName = youTubeChannel
anotherName  = "hashim"

console.log(youTubeChannel)
console.log(anotherName)

let userOne = {
    email:"hashim@google.com",
    upi:"user@ybl"
}

 let userTwo = userOne
 userTwo.email = "chem&code@gmail.com"

 console.log(userOne.email)  
 console.log(userTwo.email)