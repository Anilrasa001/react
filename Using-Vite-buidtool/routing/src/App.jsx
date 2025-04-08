import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RouteComponent from './RouteComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouteComponent></RouteComponent>
       
    </>
  )
}

export default App
