import React from 'react'

function HousingLoan(props) {
    console.log(props)
  return (
    <div>
        {props.housedata.housingloan.loantype}&nbsp;&nbsp;&nbsp;&nbsp;
        {props.housedata.housingloan.roi}&nbsp;&nbsp;&nbsp;&nbsp; 
        {props.housedata.housingloan.salaried} &nbsp;&nbsp;&nbsp;&nbsp;
        {props.housedata.housingloan.tenure}
    </div>
  )
}

export default HousingLoan
