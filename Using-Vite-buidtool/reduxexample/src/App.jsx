import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AccountDataComp from './AccountDataComp'
import {Provier} from "./react-redux"
import reduxstore from "./AccountDataComp"
import ReactComponent from './ReactComponent'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AccountDataComp/>
    <Provier store={reduxstore}>
      <ReactComponent></ReactComponent>
    </Provier>
    </>
  )
}

export default App
