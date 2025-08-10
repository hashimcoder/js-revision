
// const name = "hashim"

// function test(){
//     console.log(name)
// }

// test()

function test(){
    let name = "hashim"
    console.log(name)
}
//  console.log(name) // error reference name is not defined 
 test()

//  {
//     let a = 5
//     var b = 4;
//  }
//  console.log(a) // reference a is not defined
//  console.log(b)

let x = 1;

function outer() {
  let y = 2;
  
  function inner() {
    let z = 3;
    console.log(x, y, z); // it can access all variables
  }
  
  inner();
}

outer();  

// var count = 1;

// function foo(){
//     console.log(count)
//     var count = 2;
//     console.log(count)
// }
// foo()

// let num = 5;

// function a() {
//   console.log(num);
//   let num = 10;
// }

// a();


let a = 10;

function first() {
  console.log(a);
}

function second() {
  let a = 20;
  first();
}

second();
