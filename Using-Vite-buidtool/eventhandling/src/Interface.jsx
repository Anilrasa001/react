import React,{useState} from 'react'

function Interface() {
    let [data,setData]=useState();
    let [count,setCount]=useState(0);

    function handleClick(e)
    {
        console.log(e)
        console.log("the target is"+e.target)
        console.dir("the dom element"+e.target)
        count=count+1;
        console.log(count)
        setCount(c => c+1)
        
    }
    function handleText(e)
    {
        console.log(e)
        console.log(e.target.value)
        setData(e.target.value)

    }
  return (
    <div>
        <h1>event handling in react js</h1>
        <input type="text" onChange={handleText}></input>
        <button onClick={handleClick}>CLICK ME</button>

        <p>the paragraph text is:{data}</p>
        <p>The count is:{count}</p>

      
    </div>
  )
}

export default Interface;
