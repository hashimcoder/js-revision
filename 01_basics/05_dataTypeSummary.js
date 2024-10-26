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

