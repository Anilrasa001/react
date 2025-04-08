import React, { useRef } from 'react'
import {useSelector,useDispach} from 'react-redux' 

function ReactComponent(){
    const nameref=useRef();
    const balanceamt=useSelector((somestate)=> somestate.balance);
    const 


    function handleDiposit(){
        dispatch({type:"deposit",payload:1000});
        console.log()
    }

    function handleWithdraw(){
        dispatch({type:"withdraw",payload:500});
        console.log();

    }

  return (
    <div>
        <button onClick={handleDiposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
      
    </div>
  )
}

export default ReactComponent

//storeobj.dispatch({type:"withdraw",payload:500});
//storeobj.dispatch({type:"deposit",payload:1000});