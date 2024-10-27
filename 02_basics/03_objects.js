
// singeton
//constructor 

const userJs = {      
    name:"hashim",
    age:18,
    City:"Rampur",
}

userJs.name = "khan"
Object.freeze(userJs)      //now  we can not overide the value 
console.log(userJs.name)

// console.log(userJs.name)      /// Accessing object properties via dot notaion
// console.log(userJs["name"])     /// accessing objec proerty via [] notaion

const userJs1 = new Object()   /// creating object using new keword 

userJs1.name = "alica"
userJs1.age = 12
userJs1.city ="Rampur"
// console.log(userJs1.name)
// console.log(userJs1["name"])


// userJs.greeting = function(){
//     console.log("hello js user")
// }

// console.log(userJs.greeting())

// creating objects using a constructor function 

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const person1 = new Person("Alice", 30);
  console.log(person1)
  const person2 = new Person("Bob", 25);
  person2.job = "tech"     /// add property
  console.log(person2)
  delete person2.job   //// delete property
  console.log(person2)
  

  // ++++++++++++++++++++++++++++++++++ Object Method +++++++++++++++++++++++++++++++// 

  const calculate = {
    add: function (a,b) {
        return a+b;
    }
  }

  console.log(calculate.add(5,3))

  const boy = {
    name:"alex",
    greet:function(){
        console.log(`Hello there my name is ${this.name}`)     ///Inside methods, this refers to the current object.
    }
  }

  boy.greet()