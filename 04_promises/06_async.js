//JavaScript is single-threaded, meaning it executes one thing at a time on a single call stack.
// we need asynchronous programming — so long-running tasks can be delegated to
//  the browser’s Web APIs or Node’s background threads, and JS can keep doing other things.


// problemset1
// function delay(ms) {
//   return new Promise(resolve => setTimeout(() => resolve(ms), ms));
// }

// async function test() {
//   console.log("Start");
//   const time = await delay(2000);
//   console.log(`Waited for ${time} ms`);
//   console.log("End");
// }

// test();


// problemset2
function getNumber(num) {
  return new Promise(resolve => setTimeout(() => resolve(num), 1000));
}

async function calculate() {
  const a = await getNumber(5);
  const b = await getNumber(10);
  console.log(a + b);
}

calculate();


function getData() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Something went wrong!"), 1500);
  });
}

async function fetchData() {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
