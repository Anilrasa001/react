import React,{ createContext } from 'react'
import ProductsInfoComponent from './ProductsInfoComponent';
import ProductsCategoryComponent from './ProductsCategoryComponent'
export let data=createContext();
function StoreData() {
    let products="this is a product information"
  return (
    <div>
        <data.Provider value={products}>
        <ProductsInfoComponent/>
        <ProductsCategoryComponent/>
        </data.Provider>
    </div>
  )  
}

export default StoreData;
