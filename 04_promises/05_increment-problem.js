// problem1
let x = 3;
let y = x++ + ++x;
console.log(x,y)  // output 5 8 

// problem2

let a = 5;
let b = ++a + a++ + ++a ;
console.log(a,b)  // output 8 20

// problem3

let p = 10;
let q = p++ + p++ + ++p;
console.log(p, q);  // 13 34

// problem4
let m = 0;
m = m++ + ++m + m++;
console.log(m);  // output 4 
// problem5
let k = 1;
let result = ++k + k++ + k++ + ++k;
console.log(k, result);

