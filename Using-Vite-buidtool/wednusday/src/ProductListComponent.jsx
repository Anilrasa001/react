import React from 'react'
import ChildComponent from './ChildComponent';
function ProductListComponent() 
{
 const productlist={
    toys:{
        tid:1001,
        category:"kids",
        agegroup:2
    },
    watch:{
        wid:1001,
        wcategory:"casual",
        wageguoup:18
    }
 }
 return(

//    <ChildComponent {...productlist.toys}/>
//<ChildComponent {...productlist}/>
<ChildComponent details={productlist}/>


)
}

export default ProductListComponent;


