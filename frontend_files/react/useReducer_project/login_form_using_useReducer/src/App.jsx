import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Login } from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>I am react page</h1>
     <Login/>
     </>
  )
}

export default App
