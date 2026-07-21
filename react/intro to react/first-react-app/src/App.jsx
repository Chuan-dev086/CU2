import JamesImages from './assets/James.jpg'

function App (){ 
return( 
  <> 
  <h1>My First Customized React Page </h1> 
  <p>Lebron James in Golden State Worriars </p> 
  {/* this is react method of importing image and using it  */}
  <img src={JamesImages} alt='Lebron pic'/> 
  {/* this is how you use img tags normally  */} 
  {/* the difference is that you MUST remember that the path is relative FEOM index.html */}
  {/* That means you must link it ASSUMMING you are from index.html's root folder  */} 
  {/* That is why you see and you need /src first before going into /assets */} 
  <img src="/src/ass" alt="" />g
  </>
)
} 

export default App 