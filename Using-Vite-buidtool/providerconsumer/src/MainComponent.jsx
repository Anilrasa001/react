import React from 'react'
import AppContextData from './AppContext'
import ChildComponent from './ChildComponent'

function MainComponent() {
    var data="hey this is provider"
    return (
    
    <AppContextData.provider value={data}>
        <ChildComponent/>
    </AppContextData.provider>

  )
}

export default MainComponent;
