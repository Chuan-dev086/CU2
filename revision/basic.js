// variables
// unknown value?
// what if you know the value ?

//something to store data values.

//variables are basically values that are stored to a name

//example :

// cat = 5
// so you know cat is 5

// lets say cat's age is 7 ,you would declare that as
// catAge = 7

//declare 5 variables and console log them all

// var teamA = "Chicago Bulls ";
// var teamB = "Golden State Warriors"
// var teamApoints = 123
// var teamBpoints = 141
// var teamBWin = true

// console.log("TeamA:"+teamA);
// console.log(`TeamB + ${teamB}`);
// console.log(teamApoints);
// console.log(teamBpoints);
// console.log(teamBWin);

// can you change the above console logs to inculde proper statements ?
// Example:
// TeamA : Chicago Bulls
// Team A Points :123

//========================Variables=================================

//=======================Conditionals=================================

//What are conditionals?
//  A.K.A your .....if and else statement .

//if statement
// var age = 25;
// if (age >= 21) {
//   console.log("you are allowed to enter ");
// } else {
//   console.log("you are NOT allowed to enter ");
// }

// write me a if,else if and else statement
//for a traffic light system
//if green output you may go
//if yellow output you may go if you croosed the line
// if red output stop

// const trafficLight = "yellow";
// if (trafficLight == "green") {
//   console.log("you may go");
// } else if (trafficLight == "yellow") {
//   console.log("You may go if you crossed the line");
// } else {
//   console.log("Stop!!");
// }

//Ternary operators
// var points = 18;
// var message = points >= 21 ? "The games has ended" : "the game shall continue ";
// console.log(message);
//=======================conditionals===================

//=====================loops==============================

// let lapsNeeded = 10
//let ian = 0
// for(let shakthy = 0 ;  shakthy<lapsNeeded ; shakthy++
// ){
//     console.log(`Shakthy has run ${shakthy + 1 } laps`);
//     ian++
//     console.log(`Ian has run ${ian} laps`);
//     ian++
//     console.log(`Ian has run ${ian} laps`);
// }

// exercise
// rewrite the above logic in while loop

// let shakthy = 0
// while (shakthy < lapsNeeded) {
//     console.log(object);
// }

//=========================function============
// function addTwoNumbers(num1,num2){
//   console.log(`Total: ${num1 + num2 }`);
// }
// addTwoNumbers(5,6)

//Rewrite the above function, but change it to use a 'return' statement
// function addTwoNumbers(num1,num2){
//   return num1 + num2
// }
// console.log(addTwoNumbers(6,7));

//the purpose of return statement is to assign the value back to the function call
// function call is whenever you call the function

// write a function for me to calculate the area of rectangle
// use return statement to return the result,output with console log

// function perimeterRectangle(length,width) {
//   return (length + width) * 2
// }
// console.log(perimeterRectangle(10,5));

// =====================arrow function
// give area example write perimeter example
// const rectangleArea = (l,h) => l*h
// console.log(rectangleArea(5,11));

//perimeter
// const perimeterRectangle = (l, h) => (l + h) * 2;
// console.log(perimeterRectangle(5, 11));

// ========================array&object ======================

//this is an array
// let phone = [
//   "iphone",
//   "nokia",
//   "samsung",
//   "vivo",
//   "oppo",
//   "pineapple 13 pro max ",
//   "xiaomi",
// ];
// console.log(phone);

//use foreach loop for above array
// phone.forEach((phone) => {
//   console.log(phone);
// });

//this is an object
//using curly brackets

// let myProfile = {
//   name: "Chuan",
//   age: 43,
//   occupation: "Software Engineering Student",
//   hobbies: ["Gaming", "Hiking", "Coding"],
// };

// console.log(myProfile);

// for (let key in myProfile) {
//   console.log(`${key}:${myProfile[key]}`);
//   console.log(key);
//   console.log(myProfile[key]);
// }

// modify the above , i only want to show the 2nd item when it comes to hobbies
//you need if statement for this

// for (let key in myProfile) {
//   if (key == "hobbies") {
//     console.log(`${key}: ${myProfile[key][1]}`);
//   } else {
//     console.log(`${key}: ${myProfile[key]}`);
//   }
// }

// array of objects
// let myProfile = {
//   name: "Chuan",
//   age: 43,
//   occupation: "Software Engineering Student",
//   hobbies: ["Gaming", "Hiking", "Coding"],
// };

// let myFriendprofile = {
//   name: "Alex",
//   age: 35,
//   occupation: "Full-Stack Developer",
//   hobbies: ["Sewing", "Crochet", "Coding"],
// }; 

// const meAndMyFriendProfile = [myProfile, myFriendprofile] 
// console.log(meAndMyFriendProfile); 

const arrayOFAnimalObjects = [ 
  { 
     name:"Boar", 
     type:"Mammal", 
     no_of_legs:4
  },
  { 
    name:"Hammerhead Shark", 
    type:"Fish", 
    no_of_legs:0
  }
]


// using 'push' function, add new animal to array 
// has to be oject data type  

arrayOFAnimalObjects.push({ name:'Eagle', type:'Bird',no_of_legs:2}) 
console.log(arrayOFAnimalObjects);

// using a foreach loop output the animal with the format below  
// "My number 1 animal is {animal}, it is a {type} and it has {} number of legs  " 

arrayOFAnimalObjects.forEach((animal,index) => {
  console.log(`My number ${index+1} animal is ${animal.name}, it is a ${animal.type} and it has ${animal.no_of_legs} legs `);
  
});