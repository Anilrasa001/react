import { useState } from "react";
function handleOnClick()
  {
    return 'Button clicked!'

  }
function HelloComp() {

  
    return(
  <>  
    <h1>React to React</h1>;
     <h2>React a JS Library</h2>;
    <h3>World of React</h3>;
    <p>Iam a paragraph</p>

<button onClick={handleOnClick}>click me</button>
<p>I Appear ONLY AFTER BUTTON CLICK</p>   

    </>
  )
  }
  
  export {handleOnClick};
  export default HelloComp;