  import React from 'react'
  function ChildComponent(props) {
  console.log(props)
    return (
      <div>
        WEelcome
  {props.details.toys.tid}
  {props.details.watch.wid}   
      </div>
    )
  }

  export default ChildComponent

