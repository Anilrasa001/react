import React, { useContext } from 'react'
import {data } from './StoreData.jsx'
function ProductsCategoryComponent() {
    let recivedData=useContext(data);
  return (
    
      <p>{recivedData}</p>
    
  )
}

export default ProductsCategoryComponent;
