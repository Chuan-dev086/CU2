// combining DESTRUCTURE + SPREAD together 

// Destructuring and Spread with Arrays 

// Let's says you have an array of numbers,you want to destructure the first as a variable,and the rest as the original array 

const numbers = [1,2,3,4,5,6] 
const[first,...rest] = numbers 
console.log(first); 
console.log(rest); 

//destructruing and spread with objects 

const user ={ 
    name:'wen Yao ', 
    age:18 , 
    profession:'student'
} 

const updateUser ={ 
    ...user, 
    name:"Arthur" , 
    surname:"Yeap"
} 

console.log(updateUser); 

// combining destructuring and spread in function arguments 

const newUser={ 
    id:1 ,
    name:'Nicholas', 
    age:18, 
    profession:'student'
}  

const printUserInfo =({name, ...rest}) =>{ 
    console.log(name);
    console.log(rest);
} 
printUserInfo(newUser) 