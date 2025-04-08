import React from 'react'

function HandleMe()
{ 
{
    console.log("u clicked....")
}
let executeme=()=>console.log("iam arrow funtion")
  return (
    <div>
        <h1>Event Handlers in react js</h1>
        <button onClick={HandleMe}>Click Me</button>
        <button onClick={executeMe}></button>
        <button onClick={()=>
            {
                console.log("hry it is me again....")
            }
        }>Clickme again  and again </button>
      
    </div>
  )

}
export default HandleMe;
