import React from 'react'
import AppContextData from './AppContext'


function SubchildComponent() {
  return (
    <div>
        <AppContextData.Consumer>
            {
                (alldata)=>(
                    <p>this is a consumer:{alldata}</p>
                    )
            }
        </AppContextData.Consumer>
      
    </div>
  )
}

export default SubchildComponent;
