/// In JavaScript, scope determines the accessibility (visibility) of variables and functions in different parts of the code.
// It dictates where variables are defined and where they can be used. 
//There are mainly three types of scope in JavaScript


//  let a = 10    /// globar scope when the variavle declares outsite the function and can be accessible everywhere
//  const b = 20
//  var c = 30



function greet(){
    let message = "hello world" 
    // console.log(message)
}

greet()
// console.log(message)  // message is not defined we can not access the function variable outside the function where we declare them 
                     // they only access only inside that function where they declared   this is called function scope
// console.log(a)
// console.log(b)
// console.log(c)


if(true) {
    let a = 10
    const b = 20

}

//  console.log(a)  /// error a is not defined
//    console.log(b)    

if(true){
    var c = 30
}

// console.log(c)   //importand defference with var keyword Since var is function-scoped, it ignores block boundaries and is accessible outside the if block in this example.



// //++++++++KEY TAKEWAYS+++++++++++///

// //Global scope  =  variables are accessible everywhere.
// //Function scope = variables are accessible only within the function.
// ///Block scope =  variables (declared with let and const) are accessible only within the block in which they’re defined.
 

let a = 300

if(true) {
    let a = 30
    console.log(a)
}

// console.log(a)


// Nested scope 

function one(){         /// child function can access the parent variables but parent can not access the child 
    const name = "hashim"

    function two(){
         const website = "youtube"
        //  console.log(name)
    }
    // console.log(website)

    // two()
}

one()

if(true){
      const username = "hashim"
      if(username === "hashim"){
        const website = "youtube"
        // console.log(username + " " +  website)    // can access the parent variables
      }
    //   console.log(website)    // error website is not defined coz we can not access child into parent
}

// console.log(username)


console.log(addOne(3))    // can be called

function addOne(num){
   return num + 1
}


//  console.log(addTwo)   // Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num +2
}

console.log(addTwo(5))

 const boy = {
    name:"salar",
    age:"2o",
    address:"rampur"
 }

 for (const key in boy) {
      console.log(`${key}:${boy[keyS]}`)
    }
 