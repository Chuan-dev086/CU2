// destructuring objects

// you can destructuring objects into similar parts (individual variables ) by using destructuring operators

// example WITHOUT destructuring

const user = {
  name: "John Doe",
  age: 25,
};

const name = user.name;
const age = user.age;

console.log(name); //John Doe
console.log(age); // 25

//example WITH destructuring

const anotherUser = {
  anotherName: "Han Chuan",
  anotherAge: 55,
};

const { anotherName, anotherAge } = anotherUser; // this is desturcturing

console.log(anotherName); // Han Chuan
console.log(anotherAge); //55

const student = {
  studentName: "Alicia",
  studentAge: 18,
  studentGrade: "Diploma",
};

const { studentName, studentAge, studentGrade } = student;

console.log(studentName); // Alicia
console.log(studentAge); //18
console.log(studentGrade); //Diploma

//Destructuring nested object

const player = {
  playerName: " Faker Lee Sang Heok ",
  PlayerAge: 38,
  playerGame: "League Of Legends",
  team: {
    teamName: "T1",
    position: "Mid Laner ",
  }, // these values inside 'team' ,a nested object inside player can also extracted by using the destructuring operators 
}; 

//                                             here how you do it  
const { playerName,PlayerAge,playerGame,team:{teamName, position}}= player 

console.log(teamName);
console.log(position);
console.log(playerName); 



// destructuring arrays  
const colors =['red','blue','purple'] 
const [firstColor,secondColor,thirdColor] = colors 

console.log(firstColor); //red
console.log(secondColor); //blue
console.log(thirdColor);  //purple

// can you replace it with other contents 
const [lalala,blablabla,bruhbruh] = colors  

console.log(lalala);  //red 
console.log(blablabla);  //blue 
console.log(bruhbruh);  // purple 

const [iWantFirstOne,,butSkipedSecondOne] = colors 

console.log(iWantFirstOne);  //red
console.log(butSkipedSecondOne);  // purple 

//No green :( :) 


// WITHOUT Desstructuring Function Parameters 
 function greetPerson(person) {
    console.log(`Hello,${person.personName}.You are ${person.personAge} years old`);
 } 
 const person={ 
    personName:"Han Chuan", 
    personAge:26
 } 
 greetPerson(person) 

 //WITH Destructuring Function Parameters 
 function destructureGreetPerson({personName,personAge}) {
    // don't have to specifiy the person object anymore 
    console.log(`Hello,${personName}.You are ${personAge} years old `); 
 } 
 destructureGreetPerson(person) 

 // default values with destructuring 
 //using the 'person' object as an example ,we can destructure and if there is a field with no actual values from the original object 
 // it's possible to give it a default value

 const { personName,personAge,profession='student'}=person 
 console.log(personName);
 console.log(personAge);
 console.log(profession); 

 // default values for array destructing 
 const fruits =['apple','orange'] 
 const [firstFruit,secondFruit,thirdFruit='strawberry']=fruits 

 console.log(firstFruit);
 console.log(secondFruit);
 console.log(thirdFruit);