
const name = "hashim"
const repoCount = 25

// console.log(name + repoCount +  "value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Hashim")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.trimEnd())
let str1 = "hashim"
let str2 = "khan"

console.log(str1.concat(str2))

let str3 = "javascript is fun" 

console.log(str3.slice(0,10))    // output javascript
console.log(str3.substring(0,10))    // output javascript
console.log(str3.substr(0,10))       // output javascript
console.log(str3.trim())
console.log(str3.indexOf("t"))   // output 4 
console.log(str3.lastIndexOf("script"))
console.log(str3.charAt(4))


/// splitting the string intoan array based on  a specified separator 

let sentence  = "javascipt is amazing" 
let word = sentence.split(" ")
console.log(word) 
let newString = "hashim"
let modiString = newString.slice(-3,4)   //  in the slice method we can also pass the negative value 
console.log(modiString)

let newStringOne = "    hashim    "
console.log(newStringOne)
console.log(newStringOne.trim())    // Remove the white spaces
console.log(newStringOne.replace("h","k"))

let url = "http//localhost%20hitesh"

console.log(url.replace("%20","_"))
console.log(url.includes("hitesh"))

console.log(newString.startsWith("hash"))  // check if a string is begin with a specific value give true and false
console.log(newString.endsWith("in"))  // check if a string is end with a specific value or not give true and false
console.log(newString.charCodeAt())   //Return a ASCII value of a character at a specified index
console.log(newString.repeat(3))   /// repeat a string a specified number of time 


/// Some string manipulation task 
  
const countCharacter = function(str, char) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    
    return count;
}

let str = "javascript is a fun programming language";
let output = countCharacter(str, "p");

console.log(output); // Output: 5

