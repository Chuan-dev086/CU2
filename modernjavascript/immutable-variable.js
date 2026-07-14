// what is immutable ? 

//mutable --> comes from mutation 
//mutation = change 

//immutable --> cannot change  

// const name ='jack' 
//name = 'john'    // Uncaught TypeError: Assignment to constant variable. 
//because const cannot change 

//in the above example ,it's not possible to re-assign a new value to the varibles  

//reassignment does not work with primitive data-types 

//primitive data-types 
/*  
1.Boolean 
2.String
3.Number (integer,float) 
4.Undefined  
5.Null 
--Adiitional-- 
6.BigInt 
7.Symbol 
*/  

// but Re-assignment works with non-primitive data-types (A.K.A  complex data-types) 

//complex data-types 
/* 
1.Array 
2.Objects 
*/

// Work means you cannot reassign a new array or object but you can change the contents 

 const list = ['apple', 'orange'] 
list.push('mango') 
console.log(list);  //['apple' , 'orange','mango' ] 

// in the above example , you can changed the content of const variables 
// it was supposed to be just apple and orange 
//but you add mango with push method  

//Objects 
//you can change objects that are constants 

const student = { 
    name:'Han Chuan',
    age :25
} 
student.age = 30 ;  // you can change the field value 
student.hobby='hiking'   // you can even add a new field into the object 

console.log(student.age);  // 30
console.log(student.hobby);  // hiking

// but ypu cannot reassign a new object 
student ={ 
    name:'Sky', 
    age:18 
} 
//type error :Attempted to assign to constant variables 
