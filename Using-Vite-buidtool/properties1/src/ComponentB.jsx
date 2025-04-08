import React from 'react'
import ComponentC from './ComponentC'

function ComponentB(props) {
  return (
    <div>
    <ComponentC datab={props.data}/>
    </div>
  )
}

export default ComponentB;
