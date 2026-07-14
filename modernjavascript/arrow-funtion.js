// you have learned how to declare a normal function 

function sayHello() {
    console.log('hello');
}  
//you can also do something simmilar ,with arrow functions 

/* 
syntax 
const functionName = (arguments) => do something */

const multipies =(a,c) => a*c 
  console.log(multipies(10,10));  //output: 100 

// arrow functions in callbacks  
// don't be alarmed by the words 'callbacks'
 
const list = [2,4,6,8] 
 // the filter function serves as a callback 
const list2 = list.filter(num => num >5)  //this is callback function 
console.log(list2);  // [6,8] 

// this is the normal way to write function 
const list3 =list.filter(function(num){ return num < 5}) 
console.log(list3);  //[2,4]  
// above example is counterpart to using arrow function 
