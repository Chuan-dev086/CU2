function JsxComponent(){ 
    // this is an example of JSX component 
    const element=<h1>This is a JSX component</h1> 
    const anotherElement =<p>This is another JSX component</p> 
    // this will give you [obect Object] [obect Object]  
    //const combinedElement = element+anotherElement 

    //this is how you actually do it 
    const combinedElement = ( 
        <> 
        {element} 
        {anotherElement} 
        </>
    )
    //you just return thr JSX component to render it 
return combinedElement 
} 

export default JsxComponent