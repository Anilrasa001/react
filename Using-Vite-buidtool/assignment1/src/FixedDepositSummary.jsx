import React from 'react'
function FixedDepositSummary(props) {
  return (
    <div style={{border:"2px solid green",width:"100%", display:'block',backgroundColor:"black",color:'white',gap:"5px"}}>
        <h2>Fixed depositAmount summary </h2>
      <h3>
      depositAmount:{props.depositAmount},interestRate:{props.interestRate},tenure:{props.tenure},maturityAmount:{props.maturityAmount}
      </h3>
    </div>
  )
}
export default FixedDepositSummary
