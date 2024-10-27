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
