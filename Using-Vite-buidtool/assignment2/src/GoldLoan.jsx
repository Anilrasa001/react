import React from 'react'

function GoldLoan(props) {
    console.log(props)
  return (
    <div>
        {props.Gold_data.goldloan.loantype}&nbsp;&nbsp;&nbsp;&nbsp;
        {props.Gold_data.goldloan.roi}&nbsp;&nbsp;&nbsp;&nbsp;
        {props.Gold_data.goldloan.salaried}&nbsp;&nbsp;&nbsp;&nbsp;
        {props.Gold_data.goldloan.tenure}
      
    </div>
  )
}

export default GoldLoan
