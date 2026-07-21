import ReactComponent from "./ReactComponent";

function UsingReactComponent() {
  return (
    // this <> and </> is called an empty tag 
    <>
      <ReactComponent />
      <ReactComponent />
      <ReactComponent />
      <ReactComponent />
    </>
    //reason of why we using the empty tags is because React can return one parent element at the time. 
    //So we use empty tag to wrap the child component together,return it as ONE tag 
  );
}

export default UsingReactComponent;
