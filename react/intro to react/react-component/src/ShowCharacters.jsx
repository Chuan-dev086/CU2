import Character from "./props-lesson/Character.jsx"

function ShowCharacters(){  
    return( 
        <>
            <Character 
            character_name="Spider-Man" 
            character_element="web" 
            character_power_level="7000"
            /> 
            <Character 
            character_name="Superman" 
            character_element="Yellow Sun" 
            character_power_level="99999"
            /> 
            <Character 
            character_name="Goku" 
            character_element="Saiyan" 
            character_power_level="It's over 9000"/>
        </>
    )

} 

export default ShowCharacters