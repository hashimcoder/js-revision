
//in the javscript we convert the datatype explicitly(convert manually) or implicitly(where javascript convert type automatically)

// explicitly conversion

//1 Convert to string
// String(value) OR toString(value) method
let num = 123;

let str1 = String(num) //  "123"

let str2 = num.toString()

// console.log( typeof str2) // "123"

// convert to Number 

let string = "123"

let num1 = Number(string)

// console.log( typeof num1)

let num2 = parseInt(string)
let floatStr = "123.5"
let num3 = parseFloat(floatStr)

// console.log( typeof num3)

// convert to boolean 

let str4 = "hello"

let bool1 = Boolean(str4) // true 

let num4 = 0

let bool2 = Boolean(num4)
// console.log(bool1)
// console.log(bool2)

// implicitly conversion(where javascript automatically convert the datatype in ceratain scenario like mathematical operation of expression )
  // string conversion occurs with + with string

let result = "the answer is" +" " + 42; 
// console.log(result)

// number conversion happens when string using numeric value with -,*,/

let result1 = "10" -5; // out is 5(string 10 is converted into number 10)
let result2 = "10" *2 // out 20
// console.log(result2)


// convert to boolean Happens in logical contexts (like if statements) or when using logical operators

if ("hello") {
    console.log("This is true"); // "hello" is truthy, so it logs
  }
  let result3 = !!"world"; // true (double negation forces boolean conversion)
  


  // SUMMARY OF TYPE CONVERSION 

// Conversion     Type	Method or Expression              	Example
// To String	String(value), value.toString()	          String(123) → "123"
// To Number	Number(value), parseInt(), +	           Number("45") → 45
// To Boolean	Boolean(value), !!value	Boolean("")             →  false
// Implicit	+ for strings, - for numbers	"5" + 1 → "51"


