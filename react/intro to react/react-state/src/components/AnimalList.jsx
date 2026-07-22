// normal function
// function AnimalList( ){

import { useState } from "react";

// }

// export default AnimalList

//  arrow function
const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [animalEntry, setAnimalEntry] = useState(""); 
//   function to add animal into list 
  const addAnimal = () => {
    console.log(animalEntry);
    setAnimals([...animals, animalEntry]);
    setAnimalEntry("");
  };
  return (
    <>
      <ul> 
        {/* to display the list  */}
        {animals.map((animal, key) => (
          <li key={key}>{animal}</li>
        ))}
      </ul> 
      {/* the input text box */}
      <input
        type="text"
        value={animalEntry}
        onChange={(event) => setAnimalEntry(event.target.value)}
      /> 
      {/* the button to add the animal to the list */}
      <button onClick={addAnimal}>Add Animal</button>
    </>
  );
};

export default AnimalList;
