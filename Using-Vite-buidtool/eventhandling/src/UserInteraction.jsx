import React,{useState} from 'react'

export default function UserInteraction() {
// useState is hook function which usally returns an array

      let[data,setData]= useState();
      let[count,setCount]=useState(0);

    function handleClick(e)
  {
    console.log(e);
    console.log("What is the Target:"+e.target);
    console.dir("Get it in Dom Format:"+e.target);
    console.log("U clicked mE!!!!")
   count=count +1;
   console.log(count);
setCount(c => c+1)
  }
  
  function handleText(e)
  {
console.log(e);
console.log(e.target.value);
setData(e.target.value);

  }

  let executeClick=()=> console.log("Im an arrow handler function")
  
  
  
    return (
    <div>
    <h1>Welcome To Event handling </h1>
    <input type="text" onChange={handleText} />
    <button onClick={handleClick}>Click Me</button>
    
    <p>Data recived paragraph:{data}</p>

    <p>total no of times clicked:{count}</p>
    </div>
  )
}