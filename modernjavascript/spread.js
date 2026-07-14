//Spread Operators 

// what is spread operators used for ? 
// think of it as help you to expand you entire array /object  

//example
const nums1 = [1,2,3] 
const nums2 = [4,5,6] 

const numsCombined =[...nums1,...nums2]  
//notice the ... before nums1 and nums2 
//the ... is your spread operator 

console.log(numsCombined); 

const numsCombinedWithoutSpread = [nums1,nums2] 

console.log(numsCombinedWithoutSpread); 

//you can also make copy with spread operators  
const original = ['this','is','the','original'] 
const copy = [...original] 

console.log(copy); 
 
//spread operators with object 
const person={ 
    name:"Jacky", 
    age:20
} 
const student= { 
    ...person , 
    grade:"Diploma"
} 
console.log(student);

//Just like with arrays,you can also make copy with onjects by usig spread operators 

const copyOfStudent ={...student} 
console.log(copyOfStudent); 

//spread operators with fuction arguments  
function sum(a,b,c) {
    return a + b + c
} 

const nums = [1,2,3,4,5,6] 
console.log(...nums); // 1,2,3,4,5,6