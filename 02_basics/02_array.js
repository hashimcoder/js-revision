const marve_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["batman","superman", "shaktiman"]
const super_heros =["halk","nagraj","benten"]

// marve_heros.push(dc_heros)
// console.log(marve_heros[3][0])

// const all_heros = marve_heros.concat(dc_heros)   // concat to arrays
// console.log(all_heros)

const all_heros = [...marve_heros,...dc_heros,...super_heros]     // marge two arrays with spreas operator
console.log(all_heros)

const another_array = [1,2,4,[4,5,],5,[3,5,6,]]
const another_new_array = another_array.flat(Infinity)
console.log(another_new_array)

console.log(Array.isArray("hashim"))  // check the ype is array or not return true and false
console.log(Array.from("hashim"))      // change the string  or object in to array formate
console.log(Array.from({name:"hashim"}))   // interesting
   

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))   // change in to array formate 