import { useState } from 'react'
import './App.css'
import StoreData from './StoreData'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to Hooks in reactJs</h1>
      <StoreData/>
    </>
  )
}

export default App
