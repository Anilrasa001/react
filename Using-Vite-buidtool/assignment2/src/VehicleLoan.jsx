import React from 'react'

function VehicleLoan(props) {
    console.log(props)
  return (
    <div>
        {props.vehicledata.vehicleloan.loantype}&nbsp;&nbsp;&nbsp;&nbsp;
        {props.vehicledata.vehicleloan.roi}&nbsp;&nbsp;&nbsp;&nbsp;
        {props.vehicledata.vehicleloan.salaried}&nbsp;&nbsp;&nbsp;&nbsp;
        {props.vehicledata.vehicleloan.tenure}
      
    </div>
  )
}

export default VehicleLoan
