
// A closure happens when a function remembers variables
//  from the scope where it was created — even if that scope has already finished running.

// function makeFunc() {
//         var name = "Mozilla"; // local variable
//         function displayName() { // nested function
//             console.log(name);
//         }
//         return displayName;
//     }
//     var myFunc = makeFunc();
//     myFunc();


//     function outer() {
//         let count = 0;
//         function inner() {
//             count++;
//             console.log(count);
//         }
//         return inner;
//     }
//     const counter = outer();
//     counter();
//     counter();
//     counter();


    function bankAccount() {
  let balance = 0;
  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}, Balance: ${balance}`);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: ${amount}, Balance: ${balance}`);
      } else {
        console.log('Insufficient funds');
      }
    }
  };
}

const myAcc = bankAccount();
myAcc.deposit(500); // Deposited: 100, Balance: 100
myAcc.withdraw(100); // Withdrew: 50, Balance: 50
