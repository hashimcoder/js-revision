

// Problem set 1 sum of even number of an array

const numbers = [12,3,4,5,56,7,4,6,7,]

function sumOfEvenNumbs(numbers) {
    let sum = 0;
    for (const numbs of numbers) {

        if(numbs % 2 === 0){
            sum  += numbs
        }
        
    }
    return sum
}

console.log(sumOfEvenNumbs(numbers))

// Probem set 2 sum of odd number of an array

function sumOfOddNumbers(arr) {
    let sum = 0;
    for (const numbs of arr) {

        if(numbs % 2 !==0){
            sum  += numbs
        }
        
    }
    return sum
}

console.log(sumOfOddNumbers([12,3,4,5,56,7,4,6,7,]))

// Problem set 3 sum of all number of an array

function sumOfAllNumbers(arr) {
    let sum = 0;
    for (const numbs  of arr) {
        sum += numbs
    }
    return sum
}

console.log("Sum of all numbers",sumOfAllNumbers([12,3,4,5,56,7,4,6,7,]))

// Problem set 4 average of all number of an array
  function averageOfAllNumbers(arr){
    let sum = 0;

    for (const numbs of arr) {

        sum += numbs
        
    }
    return sum / arr.length
  }

  console.log("Average of all numbers ",averageOfAllNumbers([12,3,4,5,56,7,4,6,7]))