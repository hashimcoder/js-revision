// Data types in javascript

// primitive datatypes

//string => 
 //boolean => true and false
//number => 13244
// bigInt => used to store big numbers 
//null => standalone value
//undefined => 
//symbol => unique and immutable primitive value
 //object => 

    let name = "hashim";
    let loggedIn = false
    let age = 18
    const userId = null
    let boy1 = {
        name:"john",
        age:"15",
        city:"Jaipur"
    }

    console.table([name,loggedIn,age,userId,boy1.name,])


    console.log(typeof "hashim") // types tells us which type of data is this 
    console.log(typeof undefined) // undefined 
    console.log(typeof null) // object 


    //SUMMARY OF ALL DATATYPES IN JAVASCRIPT 

// /* Data Type    	Description                  	        Example
// 1 Number	     Represents integers and floating points.	         let num = 42;
// 2 BigInt	    Large integers beyond Number’s safe range.	         let bigInt = 12345678901234567890n;
// 3 String	   Text or sequence of characters.                    	let str = "Hello!";
// 4 boolean  	Logical entity with true or false values.           	let isActive = true;
// 5 Undefined 	Variable declared but not yet assigned.  	     let notAssigned;
// 6 Null	    Represents intentional absence of value.	           let empty = null;
// 7 Symbol   	Unique and immutable identifier.	                let sym = Symbol("id");
//  8 Object  	Complex data structure, like arrays/maps.   	     let obj = { name: "Bob" };/*
