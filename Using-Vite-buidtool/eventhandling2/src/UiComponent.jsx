import { useRef, useState } from "react";
import React,{useState,useRef} from 'react'

function UiComponent() 
{
    const[data,setData]=useState();
    let myheading=useRef();
    let uname =useRef();
    let visits=useRef(1);
    let [something,setSomething]=useState(0)


  return (
    <>
    Uicomponent
    EnterData:<input ref={uname} type="text"/>
    <button onClick={()=>{
        console.log("Button Clicked...")
    console.log("recived from text field"+uname.current.value)
        visits.current=visits.current+5;
        setSomething(s=>s+1);
        console.log("Clicked:"+visits.current)

    }}>click</button>
    <p>data recived:{data}</p>
    <br/>
    <h1 ref={myheading} onClick={(e)=>{
        console.log(myheading)
        console.log(myheading.current)
        console.log(myheading.current.innertHTML);
        myheading.current.innertHTML="lets code together"
    }}>Lets have a fun ....!!! click me</h1>
    <p>U have Cliecked the site :{visits.current}time</p>
    </>
      
    
  )
}

export default UiComponent
