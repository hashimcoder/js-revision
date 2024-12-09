


// This key word refer the current contex 

const user = {
    name:"hitesh",
    age:22,
    add:"Rampur",
  
    welMessage: function () {
        console.log(`${user.name } Welcome to website`)
        // console.log(this)
    }
    
}

// user.welMessage()
// user.name="sam"
// user.welMessage()

// console.log(this)

// function chai () {

//     const userName = "hitesh"

//   console.log(this)

// }

// chai()


// // arrow function just a another way of declaring the function in javascript 

// const chai = ()=> {
//     console.log(this)
// }

// chai()

// const addNum = (num1,num2) => {   // explicit return when we use return keyword
//     return num1 + num2
// }

// let result = addNum(4,4)
// console.log(result)

const addNum = (num1,num2)=> (num1+num2)  // implicit return 
console.log(addNum(3,3))