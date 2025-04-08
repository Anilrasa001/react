import React from 'react'
import ComponentC from './ComponentC'

function ComponentB(props) {
  return (
    <div>
        <ComponentC DATA_B={props.DATA}/>
    </div>
  )
}

export default ComponentB;
