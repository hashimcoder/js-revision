let myDate = new Date()


console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toString())
console.log(myDate.toUTCString())
console.log(typeof myDate)   /// date if an object in javascript

let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString())

let dateTimeStamp = Date.now()
console.log(dateTimeStamp)
console.log(Math.floor(Date.now() / 1000))

// console.log(date.getDate())  // get current date 
// console.log(date.getDay())    // get the current day 
// console.log(date.getHours())    // get the hours 
// console.log(date.getFullYear())  // get the current year 
// console.log(date.getMinutes())   //   get the min 
// console.log(date.getMonth())    // get the month 

let currentDate = new Date()
let getYear = currentDate.getFullYear()
console.log(` year is:${getYear}`)

let getMonth = currentDate.getMonth()
console.log(` Month is :${getMonth}`)

let getDay = currentDate.getDay()
console.log(`Day is : ${getDay}`)

let getHour = currentDate.getHours()
console.log(`hour is :${getHour}`)

let getMin = currentDate.getMinutes()
console.log(`min is: ${getMin}`)

let getSec = currentDate.getSeconds()
console.log(`sec :${getSec}`)

let dateObj = currentDate.toLocaleString('default', {        ////The toLocaleString() method in JavaScript is used to convert a Date object into a readable string, formatted according to the locale (language and region) and options specified. This method provides a way to format dates and times in a way that reflects local conventions, including timezone, date order, and whether to use a 12-hour or 24-hour clock.
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
})

console.log(dateObj)