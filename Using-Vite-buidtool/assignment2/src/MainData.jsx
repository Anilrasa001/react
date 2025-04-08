import React,{createContext} from 'react'
import GoldLoan from './GoldLoan';
import VehicleLoan from './VehicleLoan';
import HousingLoan from './HousingLoan';
export let data=createContext();
function MainData() {
    let loaninfo={

        housingloan:
       {
       loantype:"Home Loan",
       roi:9.5,
       salaried:true,
       tenure:"20 years"
       },
        vehicleloan:
       {
       loantype:"Vehicle Loan",
       roi:11.5,
       salaried:true,
       tenure:"10 years"
       },
       
       
       goldloan:
       {
       loantype:"Gold Loan",
       roi:22.5,
       salaried:false,
       tenure:"1 year"
       }
    }
  return (
    <div>
        <data.Provider value={loaninfo}>
        <GoldLoan Gold_data={loaninfo}/>
        <HousingLoan housedata={loaninfo}/>
        <VehicleLoan vehicledata={loaninfo}/>
        </data.Provider>
        

      
    </div>
  )
}

export default MainData
