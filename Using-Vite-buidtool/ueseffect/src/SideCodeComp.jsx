//useefect is used by React
import React,{useState,useEffect} from 'react'

function SideCodeComp() {
    let[data,setData]=useState(0);
    let[addcolor,setAddColor]=useState("blue")
    useEffect(
        ()=>
            {
                document.title="Hello All:"+data+"Im Coloured:"+addcolor;

            },[data,addcolor],
    )
    //this ends the use effect function
    function Increse(){
        setData(d=>d+1)

    }
    function Decrease(){
        setData(d=>d-1)

    }
    function MysideCode(){
        setAddColor(addcolor =>addcolor?"red":"blue")
    }
    function getData()
    {
        
    }
  return (    
    <div>
        side component
        <button onClick={Increse}>Increase</button>
        <button onClick={Decrease}>Derease</button>
        <button onClick={MysideCode}>Side-by-side</button>
        <h1 style={{color:addcolor}}>{data}</h1>
      
    </div>
  )
}

export default SideCodeComp
