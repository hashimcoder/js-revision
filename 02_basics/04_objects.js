const obj1 = {a:1,b:4,c:5}
console.log(obj1)
const obj2 = {a:2,b:3,C:6}
console.log(obj2)

// const obj3 = Object.assign(obj1,obj2)  // mergin object
// console.log(obj3)

const obj3 = {...obj1,...obj2}   /// mergin by spread operator 

console.log(obj3)

const users = [
    {
        id:1,
        email:"h@khangmail.com"
    },
    {
        id:2,
        email:"j@khangmai.com"
    },
    {
        id:2,
        email:"j@khangmai.com"
    }
]
users[0].email

const user = {
    name:"hahsim",
    email:"g@MediaList.com",

}

console.log(user.hasOwnProperty())
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(obj1.hasOwnProperty("a"))


/// Object destructuring /// 
//Object destructuring is a feature in JavaScript that allows you to "unpack" properties from an object into distinct variables.
// This syntax makes it easy to extract values without needing to write repetitive code.


const course = {
    courseNmae : "javascript",
    courseInstructor:"Hashim",
    fees:"free"
}

// console.log(course.courseInstructor)
// console.log(course.courseNmae)    

const {courseInstructor:instructor,courseNmae} = course

console.log(instructor)
console.log(courseNmae)

const newUser = {
    name:"john",
    age:22,
    // fees:222

}
const {name,age,fees="22"} = newUser   // we can also pass the default value while destructuring the object
console.log(name)
console.log(age)
console.log(fees) 

//  nesting destructuring

const person = { name: "Alice", address: { city: "New York", zip: 10001 } };
const { address: { city, zip } } = person;
console.log(city); // New York
console.log(zip);  // 10001
