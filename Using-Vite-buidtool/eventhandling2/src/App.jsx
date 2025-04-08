import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UiComponent from './UiComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UiComponent/>
    </>
  )
}

export default App
