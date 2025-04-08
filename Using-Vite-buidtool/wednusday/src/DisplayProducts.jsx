import React from 'react'

function DisplayProducts(props) {
  return (
    <div>
        <p>
            {props.tid}
            {props.category}
            {props.agegroup}
        </p>
      
    </div>
  )
}

export default DisplayProducts;
