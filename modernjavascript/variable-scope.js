//difference between var and let 
//var is function-scoped ,let is block-scoped 
// var is function-scoped ,you can redeclare it inside another function 

var name ='jack' 

function printName(){ 
    var name ='john' 
    console.log(name);
} 

printName() //john 
console.log(name);  //jack


// what if it's NOT a function block 

if (true) {
    var name ='jason' 
} 
console.log(name);  //jason  

// let 

let age = 37 

function printAge() { 
    let age = 45 
    console.log(age);
} 

printAge() //45
console.log(age); //37 

if (true) {
    let age = 10 
    console.log(age); //10 
} 
console.log(age);   //37 
