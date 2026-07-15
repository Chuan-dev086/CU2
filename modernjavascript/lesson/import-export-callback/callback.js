//the 'callback' argument CAN act as a function
// function greet(callback) {
//   console.log("Hello!!");
//   // at here it calling the argument as a function
//   callback();
// }

// greet(function sayName() {
//   console.log("John Doe ");
// });

// not a callback function
//the argument is 'name '
// function noCallbackGreeting(name) {
//   //
//   console.log(`My name is ${name}`);
// }

// noCallbackGreeting("Chuan");

// want a function that does addition first then squares the results that consloe log

// const calculateSum = (num1, num2, squareFunction) => {
//   const sum = num1 + num2;
//   squareFunction(sum);
// };

// const squareAndlog = (number) => {     // the other ways of callback function 
//   console.log(number ** 2);
// };

// calculateSum(2, 2, (result) => {
//   console.log(result ** 2);
// });
//  calculateSum(5,4,calculateSum) 

// recursive function example
//  function factorial(n) {
//   // 1. Base Case
//   if (n === 1 || n === 0) {
//     return 1;
//   }
//   // 2. Recursive Case
//   return n * factorial(n - 1);
// }

// console.log(factorial(9)); // Output: 6 
 

//asynchronous callbacks 

// to understand asynchronous ,you have to understand synchronous first  

function dummyDownload(url,callback){ 
   // as if you are downloading actual data 
  console.log("Downloading Data");
 // to simulated the download process 
  setTimeout(() => { 
    console.log(`Download Data from ${url}`); 
    callback()
  },2000)
} 
 
dummyDownload('http://google.com',function process(){ 
  console.log("Now I am processing the data");
})

